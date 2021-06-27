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
	public class ListsController : ControllerBase
	{
		private readonly IListsRepository _listRepo;

		public ListsController(IListsRepository listRepo)
		{
			_listRepo = listRepo;
		}


		[HttpGet]
		async public Task<ActionResult<List<List>>> GetAllLists()
		{
			try
			{
				List<List> result = await _listRepo.GetAllLists();
				List<ListDto> res = result.Select(x => ListMapper.Map(x)).ToList();
				return Ok(res);
			}
			catch
			{
				return NotFound();
			}
		}

		[HttpGet("{id}")]
		async public Task<ActionResult<List>> GetList(long id)
		{
			try
			{
				List result = await _listRepo.GetList(id);
				ListDto res = ListMapper.Map(result);
				return Ok(res);
			}
			catch
			{
				return NotFound();
			}
		}

		[HttpPost]
		async public Task<ActionResult<List>> AddList(List list)
		{
			try
			{
				List result = await _listRepo.AddList(list);
				return CreatedAtAction(nameof(GetList), new { id = result.Id }, result);
			}
			catch
			{
				return BadRequest();
			}
		}

		[HttpPut("{id}")]
		async public Task<ActionResult<List>> UpdateList([FromRoute]long id, List list)
		{
			try
			{
				List result = await _listRepo.GetList(id);
				list.Id = result.Id; 
				result = await _listRepo.UpdateList(list);
				ListDto res = ListMapper.Map(result);
				return Ok(res);
			}
			catch
			{
				return NotFound();
			}
		}

		[HttpDelete("{listId}")]
		async public Task<ActionResult> DeleteList(long listId)
		{
			try
			{
				List list = await _listRepo.GetList(listId);
				await _listRepo.DeleteList(list);
				return Ok();
			}
			catch
			{
				return NotFound();
			}
		}

	}
}
