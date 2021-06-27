using Model;
using TodoServer.Data.Dtos;

namespace TodoServer.Mappers
{
	public class ItemMapper
	{
		public static ItemDto Map(Item item)
		{
			ItemDto itemDto = new()
			{
				Id = item.Id,
				Caption = item.Caption,
				ListId = item.ListId,
				IsCompleted = item.IsCompleted,
			};
			return itemDto;

		}
	}
}

