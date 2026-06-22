// Subtle scroll-reveal and latest writing from AT Protocol. See DESIGN.md.
(function () {
  "use strict";

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  var prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  var observer = null;

  function observeRevealables(elements) {
    if (!elements.length) return;

    if (prefersReduced || !("IntersectionObserver" in window)) {
      elements.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    if (!observer) {
      observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry, i) {
            if (!entry.isIntersecting) return;
            var el = entry.target;
            el.style.transitionDelay = Math.min(i * 60, 180) + "ms";
            el.classList.add("is-visible");
            observer.unobserve(el);
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
      );
    }

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  observeRevealables(Array.prototype.slice.call(document.querySelectorAll(".reveal")));

  var PDS = "https://eurosky.social";
  var REPO = "did:plc:rzeldxi4pe24uahas3z65wnp";
  var BLOG_BASE = "https://blog.andyschwab.link";
  var POST_LIMIT = 3;

  var dateFmt = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  function textEl(tag, text) {
    var el = document.createElement(tag);
    el.textContent = text;
    return el;
  }

  function firstContentImage(v) {
    var pages = (v.content && v.content.pages) || [];
    for (var i = 0; i < pages.length; i++) {
      var blocks = pages[i].blocks || [];
      for (var j = 0; j < blocks.length; j++) {
        var block = blocks[j].block || {};
        if (
          block.$type === "pub.leaflet.blocks.image" &&
          block.image &&
          block.image.ref &&
          block.image.ref.$link
        ) {
          return {
            cid: block.image.ref.$link,
            alt: block.alt || "",
          };
        }
      }
    }
    return null;
  }

  function getPostImage(v) {
    var cover = v.coverImage;
    if (cover && cover.ref && cover.ref.$link) {
      var contentImage = firstContentImage(v);
      return {
        cid: cover.ref.$link,
        alt: (contentImage && contentImage.alt) || v.title || "",
      };
    }
    return firstContentImage(v);
  }

  function imageUrl(cid) {
    return (
      BLOG_BASE +
      "/api/atproto_images?did=" +
      encodeURIComponent(REPO) +
      "&cid=" +
      encodeURIComponent(cid) +
      "&v=1"
    );
  }

  function renderPosts(posts) {
    var list = document.getElementById("writing-list");
    if (!list) return;

    posts.forEach(function (post) {
      var li = document.createElement("li");
      li.className = "writing__item reveal";

      if (post.imageCid) {
        var thumb = document.createElement("a");
        thumb.className = "writing__thumb";
        thumb.href = post.url;
        var img = document.createElement("img");
        img.src = imageUrl(post.imageCid);
        img.alt = post.imageAlt || "";
        img.width = 72;
        img.height = 72;
        img.loading = "lazy";
        img.decoding = "async";
        thumb.appendChild(img);
        li.appendChild(thumb);
      }

      var body = document.createElement("div");
      body.className = "writing__body";

      var time = document.createElement("time");
      time.className = "writing__date";
      time.dateTime = post.publishedAt;
      time.textContent = dateFmt.format(new Date(post.publishedAt));

      var title = document.createElement("h3");
      title.className = "writing__title";
      var link = document.createElement("a");
      link.href = post.url;
      link.textContent = post.title;
      title.appendChild(link);

      body.appendChild(time);
      body.appendChild(title);

      if (post.description) {
        var desc = textEl("p", post.description);
        desc.className = "writing__desc";
        body.appendChild(desc);
      }

      li.appendChild(body);
      list.appendChild(li);
    });

    observeRevealables(Array.prototype.slice.call(list.querySelectorAll(".reveal")));
    list.classList.add("is-visible");
  }

  function hideWritingSection() {
    var section = document.getElementById("writing-section");
    if (section) section.hidden = true;
  }

  function loadWriting() {
    var list = document.getElementById("writing-list");
    if (!list) return;

    var url =
      PDS +
      "/xrpc/com.atproto.repo.listRecords?repo=" +
      encodeURIComponent(REPO) +
      "&collection=site.standard.document&limit=20";

    fetch(url)
      .then(function (res) {
        if (!res.ok) throw new Error("fetch failed");
        return res.json();
      })
      .then(function (data) {
        var records = data.records || [];
        var posts = records
          .map(function (r) {
            var v = r.value;
            var image = getPostImage(v);
            return {
              title: v.title,
              description: v.description || "",
              publishedAt: v.publishedAt,
              url: BLOG_BASE + v.path,
              imageCid: image && image.cid,
              imageAlt: image && image.alt,
            };
          })
          .filter(function (p) {
            return p.title && p.publishedAt && p.url;
          })
          .sort(function (a, b) {
            return b.publishedAt.localeCompare(a.publishedAt);
          })
          .slice(0, POST_LIMIT);

        if (!posts.length) {
          hideWritingSection();
          return;
        }

        renderPosts(posts);
      })
      .catch(function () {
        hideWritingSection();
      });
  }

  loadWriting();
})();
