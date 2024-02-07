! function (a) {
  "use strict";
  $.ajaxChimp = {
    responses: {
      "Check your email, we've sent you the recipes!": 0,
      "Please enter a value": 1,
      "An email address must contain a single @": 2,
      "The domain portion of the email address is invalid (the portion after the @: )": 3,
      "The username portion of the email address is invalid (the portion before the @: )": 4,
      "This email address looks fake or invalid. Please enter a real email address": 5
    },
    translations: {
      en: null
    },
    init: function (a, e) {
      $(a).ajaxChimp(e)
    }
  }, $.fn.ajaxChimp = function (a) {
    return console.log("Initializing ajaxchimp..."), $(this).each(function (e, o) {
      var t = $(o);
      console.log("Submitting form...");
      var s = t.find("input[type=email]"),
        n = t.find('div[class="mc-label"]'),
        i = $.extend({
          url: t.attr("action"),
          language: "en"
        }, a),
        l = i.url.replace("/post?", "/post-json?").concat("&c=?");
      t.attr("novalidate", "true"), s.attr("name", "EMAIL"), t.submit(function () {
        var a = s.val();
        var e, o = {},
          r = t.serializeArray();
        $.each(r, function (a, e) {
          o[e.name] = e.value
        }), $.ajax({
          url: l,
          data: o,
          success: function (o) {
            if ("success" !== o.result) {
              s.removeClass("valid").addClass("error"), n.removeClass("valid").addClass("error");
              try {
                var t = o.msg.split(" - ", 2);
                o.msg.indexOf("is already subscribed") > 0 && (o.msg = "You're already subscribed! Just a sec while we fetch your referral link...", fetch("https://lett.ai/getref?email=" + a, {
                  method: "post"
                }).then(function (t) {
                  console.log("Reffing " + a), t.text().then(function (t) {
                    console.log("Got reflink " + t), fetch("https://lett.ai/getpos?email=" + a, {
                      method: "post"
                    }).then(function (s) {
                      console.log("Reffing " + a), s.text().then(function (a) {
                        return console.log("Got pos " + a), e = "Check your email, we've sent you the recipes!", "en" !== i.language && void 0 !== $.ajaxChimp.responses[e] && $.ajaxChimp.translations && $.ajaxChimp.translations[i.language] && $.ajaxChimp.translations[i.language][$.ajaxChimp.responses[e]] && (e = $.ajaxChimp.translations[i.language][$.ajaxChimp.responses[e]]), n.html(e), n.show(2e3), i.callback && i.callback(o)
                      })
                    })
                  })
                })), void 0 === t[1] ? e = o.msg : parseInt(t[0], 10).toString() === t[0] ? (t[0], e = t[1]) : e = o.msg
              } catch (t) {
                e = o.msg
              }
              return "en" !== i.language && void 0 !== $.ajaxChimp.responses[e] && $.ajaxChimp.translations && $.ajaxChimp.translations[i.language] && $.ajaxChimp.translations[i.language][$.ajaxChimp.responses[e]] && (e = $.ajaxChimp.translations[i.language][$.ajaxChimp.responses[e]]), n.html(e), n.show(2e3), i.callback && i.callback(o)
            }
            e = "Check your email, we've sent you the recipes!", n.removeClass("error").addClass("valid"), s.removeClass("error").addClass("valid"), window.location.href.indexOf("ref") > 0 && fetch(window.location.href, {
              method: "post"
            }), fetch("https://lett.ai/getref?email=" + a, {
              method: "post"
            }).then(function (t) {
              console.log("Reffing " + a), t.text().then(function (t) {
                console.log("Got reflink " + t), fetch("https://lett.ai/getpos?email=" + a, {
                  method: "post"
                }).then(function (s) {
                  console.log("Reffing " + a), s.text().then(function (a) {
                    return console.log("Got pos " + a), e = "Check your email, we've sent you the recipes!", "en" !== i.language && void 0 !== $.ajaxChimp.responses[e] && $.ajaxChimp.translations && $.ajaxChimp.translations[i.language] && $.ajaxChimp.translations[i.language][$.ajaxChimp.responses[e]] && (e = $.ajaxChimp.translations[i.language][$.ajaxChimp.responses[e]]), n.html(e), n.show(2e3), i.callback && i.callback(o)
                  })
                })
              })
            })
          },
          dataType: "jsonp",
          error: function (a, e) {
            console.log("mailchimp ajax submit error: " + e)
          }
        });
        var h = 'Submitting... if you see this message for more than a few seconds, your wireless is blocking our mailing list.';
        return "en" !== i.language && $.ajaxChimp.translations && $.ajaxChimp.translations[i.language] && $.ajaxChimp.translations[i.language].submit && (h = $.ajaxChimp.translations[i.language].submit), n.html(h).show(2e3), !1
      })
    }), this
  }, $("#mc-embedded-subscribe-form").ajaxChimp(), $("#mc-embedded-subscribe-form-2").ajaxChimp()
}(jQuery);