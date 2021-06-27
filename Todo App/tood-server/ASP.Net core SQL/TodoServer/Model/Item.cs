
using System;
using System.ComponentModel.DataAnnotations;

namespace Model
{
	public class Item
	{
		public long Id { get; set; }

		//[Required]
		//[StringLength(25, MinimumLength = 10)]
		public string Caption { get; set; }

		//[Required]
		public long ListId { get; set; }

		//[Required]
		public bool IsCompleted { get; set; }


		// relation to List
		public List List { get; set; }

	}
}
