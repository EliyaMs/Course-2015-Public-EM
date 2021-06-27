using Model;
using System.Collections.Generic;
using TodoServer.Data;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace TodoServer.Services
{
	public class ListsRepository : IListsRepository
	{
		private readonly TodoDbContext _todoDbContext;

		public ListsRepository(TodoDbContext todoDbContext)
		{
			_todoDbContext = todoDbContext;
			_todoDbContext.ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
		}

		async public Task<List> AddList(List list)
		{
			var newList = await _todoDbContext.Lists.AddAsync(list);
			await _todoDbContext.SaveChangesAsync();

			return newList.Entity;
		}

		async public Task<List> GetList(long listId)
		{
			List list = await _todoDbContext.Lists.FindAsync(listId);
			return list;
		}


		async public Task<List<List>> GetAllLists()
		{
			var lists = await _todoDbContext.Lists.ToListAsync();

			return lists;
		}
		async public Task<List> UpdateList(List list)
		{
			_todoDbContext.Lists.Update(list);
			await _todoDbContext.SaveChangesAsync();

			return list;
		}

		async public Task DeleteList(List list) // change to DeleteList(List list)
		{
			_todoDbContext.Lists.Remove(list);
			await _todoDbContext.SaveChangesAsync();
		}
	}
}
