angular.module("gulp.templateCache").run(["$templateCache", function($templateCache) {$templateCache.put("scripts/directives/travellerBanner/travellerBanner.tpl.html","<div class=\"main-banner\"><div class=\"main-slogon\" ng-if=\"!tourShow\">聪明的选择，让旅游更完美</div><div><button class=\"btn btn-primary btn-lg\" data-toggle=\"modal\" data-target=\"#myModalTour\">提交旅游计划</button></div></div><div class=\"modal fade modal-tour\" id=\"myModalTour\" tabindex=\"-1\" role=\"dialog\" aria-divledby=\"myModaldiv\"><div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-body\"><div class=\"main-form\"><div class=\"main-slogon-sm\">聪明的选择，让旅游更完美</div><div class=\"main-form-group\"><div class=\"input-group\"><input class=\"form-control\" placeholder=\"出发地\"> <span class=\"input-group-btn\"><button class=\"btn btn-default\" type=\"button\"><i class=\"fa fa-plus\"></i></button></span></div></div><div class=\"main-form-group\"><div class=\"input-group\"><input class=\"form-control\" placeholder=\"途径\"> <span class=\"input-group-btn\"><button class=\"btn btn-default\" type=\"button\"><i class=\"fa fa-plus\"></i></button></span></div></div><div class=\"main-form-group\"><div class=\"input-group\"><input class=\"form-control\" placeholder=\"目的地\"> <span class=\"input-group-btn\"><button class=\"btn btn-default\" type=\"button\"><i class=\"fa fa-plus\"></i></button></span></div></div><div class=\"main-form-group\"><div><input class=\"form-control\" placeholder=\"日期\"></div></div><div class=\"main-form-group\"><div><input class=\"form-control\" placeholder=\"大人/小孩\"></div></div><div class=\"main-form-group\"><div><input class=\"form-control\" placeholder=\"主题\"></div></div><div class=\"main-form-group\"><div><input class=\"form-control\" placeholder=\"用车\"></div></div><div class=\"main-form-group\"><div><input class=\"form-control\" placeholder=\"预算\"></div></div><div class=\"form-button\"><button type=\"submit\" class=\"btn btn-primary btn-lg\">订制</button></div></div></div></div></div></div>");
$templateCache.put("scripts/directives/travellerFooter/travellerFooter.tpl.html","<footer><div class=\"footer-end\"><div class=\"footer-lists\"><div>关于我们</div><div>加入我们</div><div>联系我们</div><div>用户协议</div><div>购买协议</div><div>常见问题</div></div><div class=\"footer-copyright\">© Copyright 2015 by Traveller</div></div></footer>");
$templateCache.put("scripts/directives/travellerHeader/travellerHeader.tpl.html","<header><nav class=\"navbar navbar-modified\"><div class=\"container-fluid\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"><span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" href=\"/\"><img alt=\"Brand\" src=\"images/logo.png\"></a></div><div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\"><ul class=\"nav navbar-nav navbar-right nav-modify\" style=\"margin-top: 10px\"><li><a ui-sref=\"main\">首页</a></li><li><a ui-sref=\"user\">我是游客</a></li><li><a ui-sref=\"main\">我是导游</a></li><li data-toggle=\"modal\" data-target=\"#myModal\"><a><button class=\"btn btn-default btn-primary\" ng-click=\"changeStatus(\'signup\')\">注册</button></a></li><li data-toggle=\"modal\" data-target=\"#myModal\"><a><button class=\"btn btn-default btn-primary\" ng-click=\"changeStatus(\'login\')\">登陆</button></a></li></ul></div></div></nav></header><div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-divledby=\"myModaldiv\"><div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-body\"><div class=\"modal-left\"><div class=\"modal-left-icon\"><i class=\"fa fa-skype fa-2x\"></i></div><div class=\"modal-left-title\" ng-if=\"userStatus === \'signup\'\">欢迎加入</div><div class=\"modal-left-title\" ng-if=\"userStatus === \'login\'\">欢迎回来</div><div class=\"modal-left-oauth\"><i class=\"fa fa-qq\"></i> <i class=\"fa fa-weixin\"></i></div><div class=\"modal-left-login\" ng-if=\"userStatus === \'login\'\">已有账号？登陆</div><div class=\"modal-left-login\" ng-if=\"userStatus === \'signup\'\">还没有账号？立即注册</div></div><div class=\"modal-right\"><div class=\"modal-title\"><span ng-click=\"changeStatus(\'signup\')\" ng-class=\"{\'modalTitleRed\': userStatus === \'signup\'}\">注册</span>/ <span ng-click=\"changeStatus(\'login\')\" ng-class=\"{\'modalTitleRed\': userStatus === \'login\'}\">登陆</span></div><div class=\"modal-form-input\"><input type=\"text\" class=\"form-control\" ng-model=\"forms.username\" placeholder=\"邮箱\"></div><div class=\"modal-form-input\"><input type=\"password\" class=\"form-control\" ng-model=\"forms.password\" placeholder=\"密码\"></div><div class=\"modal-submit\" ng-if=\"userStatus === \'login\'\">注册</div><div class=\"modal-submit\" ng-if=\"userStatus === \'signup\'\">注册</div><div class=\"modal-aggrement\">点击注册代表您同意并遵守妙计旅行 用户使用协议</div></div><div class=\"modal-close\" data-dismiss=\"modal\"><i class=\"fa fa-times\"></i></div></div></div></div></div>");
$templateCache.put("scripts/views/main/main.tpl.html","<traveller-banner></traveller-banner><div class=\"main-feature\"><p>我们的特点</p><div class=\"features\"><div ng-repeat=\"feature in features\" style=\"flex: 1; display: flex; justify-content: space-around; flex-direction: column\"><div class=\"feature-title\"><div><i class=\"fa {{feature.icon}} fa-2x\"></i></div><div>{{feature.title}}</div></div><div class=\"feature-content\">{{feature.content}}</div></div></div></div><div class=\"main-tour\"><p>精品旅游路线</p><div class=\"tourgrid\"><div ng-repeat=\"tour in tours\" style=\"background-image:url({{tour.image}}); background-size: cover; display: flex; justify-content: flex-end; flex-direction: column\"><div class=\"grid-name\">{{tour.name}}</div></div></div></div><div class=\"main-corp\"><p>合作方</p><div class=\"corps\"><div ng-repeat=\"corp in corps\" class=\"corp-name\">{{corp.name}}</div></div></div>");
$templateCache.put("scripts/views/user/user.tpl.html","traveller");}]);