using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoServer.Data.Dtos;
using TodoServer.Mappers;
using TodoServer.Services;

namespace TodoServer.Controllers
{
	[Route("[controller]")]
	[ApiController]
	//[EnableCors("AllowSpecific")]
	public class ItemsController : ControllerBase
	{
		private readonly IItemsRepository _itemRepo;

		public ItemsController( IItemsRepository itemRepo)
		{
			_itemRepo = itemRepo;
		}


		[HttpGet()]
		async public Task<ActionResult<List<ItemDto>>> GetAllItems([FromQuery]bool isCompleted)
		{
			List<Item> result;

			bool isRecived = bool.TryParse(this.Request.Query["isCompleted"], out isRecived);

			if (isRecived)
			{
				result = await _itemRepo.GetItemsByStatus(isCompleted);
			}
			else
			{
				result = await _itemRepo.GetAllItems();
			}

			List<ItemDto> res = result.Select(x => ItemMapper.Map(x)).ToList();
			return Ok(res);
		}

		[HttpGet("{id}")]
		async public Task<ActionResult<List<ItemDto>>> GetItemsByListId(long id)
		{
			try
			{
				List<Item> result = await _itemRepo.GetItemsByListId(id);
				List<ItemDto> res = result.Select(x => ItemMapper.Map(x)).ToList();
				return Ok(res);
			}
			catch
			{
				return NotFound();
			}
		}

		[HttpPost]
		async public Task<ActionResult<ItemDto>> AddItem(Item item)
		{
			try
			{
				Item result = await _itemRepo.AddItem(item);
				ItemDto res = ItemMapper.Map(result);
				return Ok(res);
			}
			catch
			{
				return BadRequest();
			}
		}

		[HttpPut("{id}")]
		async public Task<ActionResult<ItemDto>> UpdateItem(Item item)
		{
			try
			{
				Item result = await _itemRepo.UpdateItem(item);
				ItemDto res = ItemMapper.Map(result);
				return Ok(res);
			}
			catch
			{
				return NotFound();
			}
		}

		[HttpDelete("{itemId}")]
		async public Task<ActionResult> DeleteItem(long itemId)
		{
			try
			{
				Item result = await _itemRepo.GetItem(itemId);
				await _itemRepo.DeleteItem(result);
				return Ok();
			}
			catch
			{
				return NotFound();
			}
		}

	}
}

