
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Model
{
	public class List
	{
		public long Id { get; set; }

		//[Required]
		//[StringLength(15)]
		public string Caption { get; set; }

		//[Required]
		//[StringLength(70,MinimumLength = 30)]
		public string Description { get; set; }

		//[Required]
		//[StringLength(30)]
		public string Image { get; set; }

		//[Required]
		//[StringLength(30)]
		public string Color { get; set; }

		public List<Item> Items { get; set; } = new();
	}
}
