using Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TodoServer.Services
{
	public interface IItemsRepository
	{
		Task<Item> GetItem(long itemId);
		Task<List<Item>> GetAllItems();
		Task<List<Item>> GetItemsByStatus(bool isCompleted);
		Task<List<Item>> GetItemsByListId(long listId);
		Task<Item> AddItem(Item item);
		Task<Item> UpdateItem(Item item);
		Task DeleteItems(long listId);
		Task DeleteItem(Item item);
	}
}