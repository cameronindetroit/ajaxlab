package co.grandcircus.ajaxlab;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class ajaxController {

	@RequestMapping("/")
	public ModelAndView index() {
		return new ModelAndView("list");

	}

}
