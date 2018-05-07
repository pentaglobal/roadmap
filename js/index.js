$.extend(String.prototype, {
  replaceAll: function(os, ns) {
    if (os instanceof RegExp) {
      return this.replace(os, ns);
    } else {
      return this.replace(new RegExp(os, 'gm'), ns);
    }
  },
  format: function() {
    var result = this;
    if (arguments.length > 0) {
      var parameters = (arguments.length == 1 && $.isArray(arguments[0]))
        ? arguments[0]
        : $.makeArray(arguments);
      $.each(parameters, function(i, n) {
        result = result.replace(new RegExp("\\{" + i + "\\}", "g"), n);
      });
    }
    return result;
  },
  substitute: function(data) {
    if (data && typeof(data) == 'object') {
      return this.replace(/\{([^{}]+)\}/g, function(match, key) {
        var value = data[key];
        return (value !== undefined)
          ? '' + value
          : '';
      });
    } else {
      return this.toString();
    }
  }
});

$(function() {
  var mainHeader = {
    tpl: "<li><a href='{url}'>{text}</a></li>",
    init: function() {
      this.$wrap = $(".language-wrap");
      var selectItem;
      for (var i = 0; i < config.language.length; i++) {
        var item = config.language[i];
        this.$wrap.find(".language").append(this.tpl.substitute(item))
        if (item.selected) {
          selectItem = item;
        }
      }
      if (!selectItem) {
        selectItem = config.language[0]
      }
      this.$wrap.find(".shows span").text(selectItem.text)
      this.bindEvent();
    },
    bindEvent: function() {
      $(window).scroll(function() {
        if ($(this).scrollTop() > 70) {
          $('.main-header').addClass('nav-bg');
        } else {
          $('.main-header').removeClass('nav-bg');
        }
      });
    }
  }

  var planPercent = {
    init: function() {
      var $wrap = $("#planPercent")
      for (var key in config.planPercent) {
        var item = config.planPercent[key];
        var $itemWrap = $wrap.find("[data-field=" + key + "]");
        $itemWrap.find(".progress-enter").css({width: item})

        $itemWrap.find(".percent").text(item);
      }
    }
  }

  var planRoad = {
    tpl: {
      tr: [
        '<tr class="tr">',
        '<td class="td"><ul></ul></td>',
        '<td class="td"><ul></ul></td>',
        '<td class="td"><ul></ul></td>',
        '<td class="td"><ul></ul> </td>',
        '</tr>'
      ].join(""),
      list: '<li class="{finishCls}"><b class="point">*</b>{name}</li>',
      quarterly: ['<div class="quarterly">', '  <span class="text">', '    <span class="quarterly-name">{name}{desc}</span>', '  </span>', '</div>'].join(""),
      star: '<span class="quarterly-icon animation"><img src="./img/star1.png"/></span>',
      github: '<span class="quarterly-icon animation1"><img src="./img/star2.png"/></span>',
      round: '<span class="quarterly-icon"><span class="icon-round"><i class="icon-round-inner"></i></span></span>'
    },
    init: function() {
      for (var key in config.planRoad) {
        var $wrap = $("#" + key);
        var $table = $wrap.find(".plan-item-table");
        var plan = config.planRoad[key];
        for (var i = 0; i < plan.children.length; i++) {
          this.renderTr($table, plan.children[i], i)
        }
        // 虚拟刻度增加
        $table.append(this.tpl.tr)
        this.renderPercent($wrap, plan);
      }
    },
    renderPercent: function($wrap, plan) {
      if (plan.percent) {
        $wrap.find(".completed b").html(plan.percent);
        $wrap.find(".completed").show();

        var $percent = $wrap.find(".plan-item-header-percent");
        $percent.show();
        $percent.css({
          clip: "rect(0px, " + $percent.outerWidth() * plan.percent / 100 + "px, 120px, 0px)"
        })
      }
    },
    renderTr: function($table, data) {
      var $tr = $(this.tpl.tr);
      if (data.iconType) {
        if (data.name) {
          data.name = "<b>" + data.name + "<br></b>"
        }
        var $quarterly = $(this.tpl.quarterly.substitute(data));
        var iconTpl = "";
        if (data.iconType == "star") {
          iconTpl = this.tpl.star
        } else if (data.iconType == "github") {
          iconTpl = this.tpl.github
        } else {
          iconTpl = this.tpl.round
        }
        $quarterly.prepend(iconTpl);
        $tr.find("td").eq(0).append($quarterly);
      }
      $table.append($tr);
      this.renderTd($tr, data.children)

    },
    renderTd: function($tr, children) {
      for (var i = 0; i < children.length; i++) {
        var item = children[i];
        var $td = $tr.find("td").eq(i).find("ul");
        if (item && item.length) {
          for (var k = 0; k < item.length; k++) {
            item[k].finishCls = item[k].isFinish
              ? "finish"
              : ""
            $td.append(this.tpl.list.substitute(item[k]));
          }
        }
      }
    }
  }

  var yearAxis = {
    tpl: ['<div class="axis-item" style="top:{top}px">', '  <span class="star"><img src="./img/star1.png"></span>', '  <span class="year">{year}</span>', '</div>'].join(""),
    init: function() {
      var $wrap = $(".roadmap-axis");
      for (var i = 0; i < config.yearAxis.length; i++) {
        $wrap.append(this.tpl.substitute(config.yearAxis[i]));
      }
    }
  }

  var main = {
    init: function() {
      mainHeader.init();
      planPercent.init();
      planRoad.init();
      yearAxis.init();
    }
  }

  main.init()
})
