using Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TodoServer.Services
{
	public interface IListsRepository
	{
		Task<List> AddList(List list);
		Task DeleteList(List list);
		Task<List<List>> GetAllLists();
		Task<List> GetList(long listId);
		Task<List> UpdateList(List list);
	}
}