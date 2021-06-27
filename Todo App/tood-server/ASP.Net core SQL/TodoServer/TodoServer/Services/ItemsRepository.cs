using Microsoft.EntityFrameworkCore;
using Model;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoServer.Data;

namespace TodoServer.Services
{
	public class ItemsRepository : IItemsRepository
	{
		private readonly TodoDbContext _todoDbContext;

		public ItemsRepository(TodoDbContext todoDbContext)
		{
			_todoDbContext = todoDbContext;
			_todoDbContext.ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
		}

		async public Task<Item> AddItem(Item item)
		{
			//using (var transaction = _todoDbContext.Database.BeginTransaction()) { }

			var newItem = await _todoDbContext.Items.AddAsync(item);
			await _todoDbContext.SaveChangesAsync();

			return newItem.Entity;
		}

		async public Task<Item> GetItem(long itemId)
		{
			Item item = await _todoDbContext.Items.FirstOrDefaultAsync(x => x.Id.Equals(itemId));
			//if (item != null)
			//{
			//	_todoDbContext.Entry(item).State = EntityState.Detached;
			//}
			return item;
		}

		async public Task<List<Item>> GetAllItems()
		{
			List<Item> Items = await _todoDbContext.Items.ToListAsync();

			return Items;
		}

		async public Task<List<Item>> GetItemsByStatus(bool _isCompleted)
		{
			List<Item> Items = await _todoDbContext.Items
								.Where(item => item.IsCompleted == _isCompleted)
								.ToListAsync();

			return Items;
		}

		async public Task<List<Item>> GetItemsByListId(long listId)
		{
			List<Item> items = await _todoDbContext.Items
									.Where(item => item.ListId == listId)
									.ToListAsync();

			return items;
		}

		async public Task<Item> UpdateItem(Item item)
		{
			_todoDbContext.Items.Update(item);
			await _todoDbContext.SaveChangesAsync();

			return item;
		}

		async public Task DeleteItems(long listId)
		{
			List<Item> items = await  GetItemsByListId(listId);

			_todoDbContext.Items.RemoveRange(items);
			await _todoDbContext.SaveChangesAsync();
		}

		async public Task DeleteItem(Item item)
		{
			_todoDbContext.Items.Remove(item);
			await _todoDbContext.SaveChangesAsync();
		}

	}
}
