package com.office.library.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController{

    @RequestMapping(value = {"/"})  // 루트 (index.html을 위해) 혹은 web 접근시에 Vue 프로젝트의 view 호출
    public String viewMapping() {
        return "forward:/index.html";
    }

}
