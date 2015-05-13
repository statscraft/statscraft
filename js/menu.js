var animationSpeed = 700;
    Modernizr = "undefined" != typeof Modernizr ? Modernizr : !1,

    function() {
        function t() {
            if ($(i).hasClass("open")) {
                $(i).removeClass("open"), $(i).addClass("close"), $("body").removeClass("menu-opened");
                var t = function(e) {
                    if (a.transitions) {
                        if ("visibility" !== e.propertyName) return;
                        this.removeEventListener(o, t)
                    }
                    $(i).removeClass("close")
                };
                a.transitions ? i.addEventListener(o, t) : t()
            } else $(i).hasClass("close") || ($(i).addClass("open"), $("body").addClass("menu-opened"))
        }
        /*var e = {
                hamburgerCross: {
                    url: "img/menu/hamburger.svg",
                    animation: [{
                        el: "path:nth-child(1)",
                        animProperties: {
                            from: {
                                val: '{"path" : "m 5.0916789,20.818994 53.8166421,0"}'
                            },
                            to: {
                                val: '{"path" : "M 12.972944,50.936147 51.027056,12.882035"}'
                            }
                        }
                    }, {
                        el: "path:nth-child(2)",
                        animProperties: {
                            from: {
                                val: '{"transform" : "s1 1", "opacity" : 1}',
                                before: '{"transform" : "s0 0"}'
                            },
                            to: {
                                val: '{"opacity" : 0}'
                            }
                        }
                    }, {
                        el: "path:nth-child(3)",
                        animProperties: {
                            from: {
                                val: '{"path" : "m 5.0916788,42.95698 53.8166422,0"}'
                            },
                            to: {
                                val: '{"path" : "M 12.972944,12.882035 51.027056,50.936147"}'
                            }
                        }
                    }]
                }
            },
            n = new SvgIcon(document.querySelector(".btn-menu"), e),*/
            i = document.getElementById("menu"),
            r = document.getElementById("btn-menu"),
            s = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                msTransition: "MSTransitionEnd",
                transition: "transitionend"
            }
            o = s[Modernizr.prefixed("transition")],
            a = {transitions: Modernizr.csstransitions};
        $(r).on("click", function(e) {
          $(this).toggleClass('active')
          e.preventDefault(),
          t();
        }), $("header nav a").click(function(e) {
            e.preventDefault(),
            $('#btn-menu').removeClass('active');
            setTimeout(function() {
              t();
            }, animationSpeed / 2)
        })
    }();