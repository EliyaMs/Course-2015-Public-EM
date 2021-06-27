using Model;
using TodoServer.Data.Dtos;

namespace TodoServer.Mappers
{
	public class ListMapper
	{
		public static ListDto Map(List list)
		{
			ListDto listDto = new()
			{
				Id = list.Id,
				Caption = list.Caption,
				Description = list.Description,
				Image = list.Image,
				Color = list.Color
			};
			return listDto;

		}
	}
}
