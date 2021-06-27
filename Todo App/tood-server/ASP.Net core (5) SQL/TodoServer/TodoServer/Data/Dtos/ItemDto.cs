namespace TodoServer.Data.Dtos
{
	public class ItemDto
	{
		public long Id { get; set; }

		public string Caption { get; set; }

		public long ListId { get; set; }

		public bool IsCompleted { get; set; }
	}
}
