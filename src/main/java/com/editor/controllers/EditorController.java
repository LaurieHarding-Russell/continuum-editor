package com.editor.controllers;


import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value = "/api/story")
public class EditorController {
	
	@ResponseBody
	@RequestMapping(value = "/{chapterId}/{pageId}", method = RequestMethod.GET)
	public String get(@PathVariable int chapterId, @PathVariable int pageId) {
		return "test";
	}
}