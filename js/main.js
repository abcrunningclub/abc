document.addEventListener("DOMContentLoaded", function () {

  /* Mobile nav toggle ----------------------------------------------------*/
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  var links = document.querySelector(".nav-links");

  if (toggle && nav && links) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      links.classList.toggle("open");
    });

    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        links.classList.remove("open");
      });
    });
  }

  /* Gallery — show 8 most recent, reveal the rest on demand -------------*/
  var galleryGrid = document.querySelector("#gallery-grid");
  var gallerySeeMore = document.querySelector("#gallery-see-more");
  var GALLERY_LIMIT = 8;

  if (galleryGrid && gallerySeeMore) {
    var galleryCards = Array.from(galleryGrid.querySelectorAll(".gallery-card"));
    if (galleryCards.length > GALLERY_LIMIT) {
      galleryCards.slice(GALLERY_LIMIT).forEach(function (card) {
        card.classList.add("gallery-hidden");
      });
      gallerySeeMore.style.display = "inline-flex";
      gallerySeeMore.addEventListener("click", function () {
        galleryCards.forEach(function (card) {
          card.classList.remove("gallery-hidden");
        });
        gallerySeeMore.style.display = "none";
      });
    }
  }

  /* Event data -------------------------------------------------------- */
  var events = [
    {
      date: "2026-07-12",
      title: "Start Better with DBD (Drop by Dough)",
      location: "Drop by Dough, Lumpini",
      image: "images/gallery/start-better-dbd.avif",
      links: [
        { label: "View Route ↗", url: "https://www.google.com/maps/dir/King+Rama+VI+Monument,+192+Rama+IV+Rd,+Lumphini,+Pathum+Wan,+Bangkok+10330/ITF+Tower,+Si+Lom+Rd,+Suriya+Wong,+Bang+Rak,+Bangkok+10500/%E0%B8%AA%E0%B8%A7%E0%B8%99%E0%B8%AA%E0%B8%B2%E0%B8%98%E0%B8%B2%E0%B8%A3%E0%B8%93%E0%B8%B0%E0%B8%84%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B8%8A%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%99%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B8%B5+(%E0%B9%80%E0%B8%9F%E0%B8%AA+2)+PGGH%2BX22,+Suriya+Wong,+Bang+Rak,+Bangkok+10500/King+Power+Mahanakhon,+114+Naradhiwas+Rajanagarindra+Rd,+Si+Lom,+Bang+Rak,+Bangkok+10500/Sathorn+Square,+98+N+Sathon+Rd,+Si+Lom,+Bang+Rak,+Bangkok+10500/DROP+BY+DOUGH+at+Lumpini+Park+6%2F6+N+Sathon+Rd,+%E0%B8%AA%E0%B8%B5%E0%B8%A5%E0%B8%A1+Bang+Rak,+Bangkok+10500/@13.7254413,100.534802,16.25z" },
        { label: "View Album ↗", url: "https://drive.google.com/drive/folders/1Azj0vqJYztH7HufiOd5-_EzqEMXbgMdt" },
        { label: "Event Page ↗", url: "https://luma.com/df6akw26" }
      ]
    },
    {
      date: "2026-07-19",
      title: "Pace and Pour x Pacamara",
      time: "4 KM Run",
      location: "Pacamara Coffee Roasters, North Sathorn",
      image: "images/gallery/pace-and-pour.jpg",
      links: [
        { label: "View Route ↗", url: "https://www.google.com/maps?geocode=FTRq0QAdvxT-BSl5kNMXAJ_iMDEgCQr7fNavDw%3D%3D;FeR30QAdXg_-BSmP-CfWQp_iMDFjjn2mXckOeg%3D%3D;FXd00QAdzvj9BSkzlu7aLJ_iMDEbXJCarYkB9w%3D%3D;FVVn0QAdC9j9BSmLuAvY0ZjiMDGXh9XhLGxx0g%3D%3D;FXlW0QAd2Nr9BSnVljKha5niMDHkJsT2z3Cchw%3D%3D;FTtj0QAdD_n9BSkH7fL84Z_iMDHkBlM9SUseTg%3D%3D;FTRq0QAdvxT-BSl5kNMXAJ_iMDEgCQr7fNavDw%3D%3D&daddr=H.O.P.+coffee+bar+Sala+Daeng+Road,+Si+Lom,+Bang+Rak,+Bangkok+to:Bangkok+Bank+Head+Office,+Bangkok+Bank,+Si+Lom+Road,+Si+Lom,+Bang+Rak,+Bangkok+to:Chong+Ko+(Halal),+Pramuan+Road,+Si+Lom,+Bang+Rak,+Bangkok+to:Roots+at+Sathon+South+Sathon+Road,+Yan+Nawa,+Sathon,+Bangkok+to:100,+N,+30-100/33,+19th+Floor,+Marco,+%E0%B8%AA%E0%B8%B2%E0%B8%97%E0%B8%A3%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%97%E0%B8%B2%E0%B8%A7%E0%B9%80%E0%B8%A7%E0%B8%AD%E0%B8%A3%E0%B9%8C+Sathon+Thani+Road,+Si+Lom,+Bang+Rak,+Bangkok+to:Pacamara+Coffee+Roasters+North+Sathorn,+North+Sathon+Road,+Si+Lom,+Bang+Rak,+Bangkok&saddr=Pacamara+Coffee+Roasters+North+Sathorn,+18+N+Sathon+Rd,+Si+Lom,+Bang+Rak,+Bangkok+10500&dirflg=w" },
        { label: "View Album ↗", url: "https://drive.google.com/drive/folders/1gYhyEOc1rUY7tA9LuL-6HI-jS94Dz4FD" },
        { label: "Event Page ↗", url: "https://luma.com/vhd78fg9" }
      ]
    },
    {
      date: "2026-07-25",
      title: "DNA CITY QUEST",
      location: "S-Oasis",
      image: "images/gallery/dna-city-quest.jpg",
      links: [
        { label: "View Album ↗", url: "https://drive.google.com/drive/folders/1YJIEJXVBOGdv_LuDA2oc2gVUU7CEPxtJ?usp=sharing" },
        { label: "Event Page ↗", url: "https://luma.com/qeqxs54l" }
      ]
    },
    {
      date: "2026-08-01",
      title: "Balenciaga x Matcha People",
      location: "Matcha People",
      time: "6:30 - 8:00 AM",
      image: "images/gallery/balenciaga-matchapeople-poster.avif",
      links: [
        { label: "View Route ↗", url: "https://www.google.com/maps/dir/ROCCA+BKK,+57+Soi+Phahon+Yothin+11,+Phaya+Thai,+Bangkok+10400/Giffarine+Clinic,+17+Rama+VI+Rd,+Phaya+Thai,+Bangkok+10400/Chaiwat+Hardware+store,+100,+3-4+Rama+VI+Soi+30,+Phaya+Thai,+Bangkok+10400/Toom's+Kitchen+OV,+6+Soi+King+Chamnan+Aksorn,+Phaya+Thai,+Bangkok+10400/ROCCA+BKK,+57+Soi+Phahon+Yothin+11,+Phaya+Thai,+Bangkok+10400/@13.784384,100.5346025,16z" },
        { label: "View Album 1 ↗", url: "https://drive.google.com/drive/folders/1WvDbbJqSbPaymOBFU7jhs5YP68C3wnAH" },
        { label: "View Album 2 ↗", url: "https://drive.google.com/drive/folders/1CxAN_IySbwrnQrLxttvkrWSt1mvvvcsn" },
        { label: "Event Page ↗", url: "https://luma.com/64t8p8sk" }
      ]
    },
    {
      date: "2026-08-02",
      title: "Friends of Sunday",
      location: "Casa Rocca",
      time: "4 KM Run",
      image: "images/gallery/friends-of-sunday-poster.avif",
      links: [
        { label: "View Route ↗", url: "https://www.google.com/maps/dir/ROCCA+BKK,+57+Soi+Phahon+Yothin+11,+Phaya+Thai,+Bangkok+10400/Giffarine+Clinic,+17+Rama+VI+Rd,+Phaya+Thai,+Bangkok+10400/Chaiwat+Hardware+store,+100,+3-4+Rama+VI+Soi+30,+Phaya+Thai,+Bangkok+10400/Toom's+Kitchen+OV,+6+Soi+King+Chamnan+Aksorn,+Phaya+Thai,+Bangkok+10400/ROCCA+BKK,+57+Soi+Phahon+Yothin+11,+Phaya+Thai,+Bangkok+10400/@13.784336,100.5346052,16z" },
        { label: "View Album 1 ↗", url: "https://drive.google.com/drive/folders/1VAmrw1scLvwxcBBHUNCZzzay4LogR4qL" },
        { label: "View Album 2 ↗", url: "https://drive.google.com/drive/folders/1F4lZeQOdS-wDL-pG5nDxh-DyrfEfsovb" },
        { label: "Event Page ↗", url: "https://luma.com/bdz79mrp" }
      ]
    },
    {
      date: "2026-08-08",
      title: "FUEL YOUR ENERGY",
      location: "Crossfit Arena",
      time: "3:00 - 6:00 PM · Hyrox Simulation",
      image: "images/gallery/fuel-your-energy-poster.avif",
      links: [
        { label: "View Album ↗", url: "https://drive.google.com/drive/folders/1dYD7HIsD42np_nC_ED1PcNqeQeEXNH4X" },
        { label: "Event Page ↗", url: "https://luma.com/t5sepyhq" }
      ]
    },
    {
      date: "2026-08-09",
      title: "EVERY MILES TOGETHER",
      location: "Beaker and Bitter",
      image: "images/gallery/every-miles-together.avif",
      links: [
        { label: "View Route ↗", url: "https://www.google.com/maps?geocode=FepH0gAdjEP-BSlp3Jwzd53iMDHP9mZwYoIt4A%3D%3D;FbZi0gAdxED-BSnVC6SUHZziMDGI-y6aB_s5bQ%3D%3D;FQZk0gAdqTv-BSl1ulRacZ3iMDH_S8j76Jrk0Q%3D%3D;FV9Q0gAduSr-BSkzWPsg0J3iMDG8VfjgALBhBQ%3D%3D;FZM70gAd3yz-BSmDN8lntZ_iMDFqcqaokd6RDA%3D%3D;FWIn0gAdlyb-BSnHkBVeAJ_iMDHrujRBN8kCcQ%3D%3D;FepH0gAdjEP-BSlp3Jwzd53iMDHP9mZwYoIt4A%3D%3D&daddr=%E0%B8%98%E0%B8%99%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B8%AD%E0%B8%AD%E0%B8%A1%E0%B8%AA%E0%B8%B4%E0%B8%99+%E0%B8%AA%E0%B8%B3%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88+Phahonyothin+Road,+Samsen+Nai,+Phaya+Thai,+Bangkok+to:1349+Four+Legs+Mala,+8+Phahonyothin+Rd,+Phaya+Thai,+Bangkok+10400+to:GUMP%E2%80%99s+Ari+Community+Space,+Aree+4th+North,+Phaya+Thai,+Bangkok+to:PEARL+Bangkok,+Phahonyothin+Road,+Phaya+Thai,+Bangkok+to:BTS+Sanam+Pao,+Phahonyothin+Road,+Samsen+Nai,+Phaya+Thai,+Bangkok+to:Beaker+and+Bitter,+Sai+Lom+1st+Alley,+Samsen+Nai,+Phaya+Thai,+Bangkok&saddr=Beaker+and+Bitter,+4+Sai+Lom+1+Alley,+Samsen+Nai,+Phaya+Thai,+Bangkok+10400&dirflg=w" },
        { label: "View Album 1 ↗", url: "https://drive.google.com/drive/folders/1w4RmDru2btvMOxqjxTeho6PzvDglWrua" },
        { label: "View Album 2 ↗", url: "https://drive.google.com/drive/folders/1Ive6i5XbuVZqfELrTu6W_KTm4A8cUWzR" },
        { label: "Event Page ↗", url: "https://luma.com/b2amy4w5" }
      ]
    },
    {
      date: "2026-08-14",
      endDate: "2026-08-16",
      title: "Hyrox Thailand — Cheer Squad",
      location: "Hyrox Thailand",
      links: [
        { label: "Cheering — come support the ABC squad!", status: "Cheering", url: "#", tbc: true }
      ]
    },
    {
      date: "2026-08-23",
      title: "Sathorn Meetup",
      location: "Sathorn",
      links: [
        { label: "To be Announced from AreWeBrewCrew Team!", url: "#", tbc: true }
      ]
    },
    {
      date: "2026-08-30",
      title: "ABC x MG",
      location: "Roots, Ari",
      links: [
        { label: "To be Announced from AreWeBrewCrew Team!", url: "#", tbc: true }
      ]
    },
    {
      date: "2026-09-05",
      title: "ABC x DNA",
      location: "Just A Drink Maybe",
      links: [
        { label: "To be Announced from AreWeBrewCrew Team!", url: "#", tbc: true }
      ]
    },
    {
      date: "2026-09-12",
      title: "ABC x Makro",
      location: "",
      links: [
        { label: "To be Announced from AreWeBrewCrew Team!", url: "#", tbc: true }
      ]
    }
  ];

  /* Calendar ------------------------------------------------------------ */
  var monthLabel = document.querySelector("#cal-month-label");
  var daysContainer = document.querySelector("#cal-days");
  var prevBtn = document.querySelector("#cal-prev");
  var nextBtn = document.querySelector("#cal-next");

  var viewDate = new Date();
  viewDate.setDate(1);

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function toISODate(year, monthIndex, day) {
    return year + "-" + pad(monthIndex + 1) + "-" + pad(day);
  }

  function isPast(dateStr) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    return new Date(dateStr + "T00:00:00") < today;
  }

  var now = new Date();
  var todayISO = toISODate(now.getFullYear(), now.getMonth(), now.getDate());

  function renderCalendar() {
    if (!daysContainer) return;

    var year = viewDate.getFullYear();
    var month = viewDate.getMonth();

    monthLabel.textContent = viewDate.toLocaleString("en-US", { month: "long", year: "numeric" });
    daysContainer.innerHTML = "";

    var firstWeekday = new Date(year, month, 1).getDay();
    var daysInMonth = new Date(year, month + 1, 0).getDate();

    for (var i = 0; i < firstWeekday; i++) {
      var blank = document.createElement("div");
      blank.className = "cal-day";
      daysContainer.appendChild(blank);
    }

    var _loop = function (d) {
      var cell = document.createElement("div");
      cell.className = "cal-day in-month";

      var numEl = document.createElement("span");
      numEl.className = "day-num";
      numEl.textContent = d;
      cell.appendChild(numEl);

      var iso = toISODate(year, month, d);

      if (iso === todayISO) {
        cell.classList.add("today");
      }

      var dayEvents = events.filter(function (e) {
        var end = e.endDate || e.date;
        return iso >= e.date && iso <= end;
      });

      if (dayEvents.length) {
        var upcoming = !isPast(iso);
        cell.classList.add("has-event", upcoming ? "upcoming" : "past");

        var labelEl = document.createElement("span");
        labelEl.className = "day-label";
        labelEl.textContent = dayEvents[0].title;
        cell.appendChild(labelEl);

        cell.addEventListener("click", function () {
          openModal(dayEvents[0]);
        });
      }

      daysContainer.appendChild(cell);
    };

    for (var d = 1; d <= daysInMonth; d++) {
      _loop(d);
    }
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", function () {
      viewDate.setMonth(viewDate.getMonth() - 1);
      renderCalendar();
    });

    nextBtn.addEventListener("click", function () {
      viewDate.setMonth(viewDate.getMonth() + 1);
      renderCalendar();
    });
  }

  renderCalendar();

  /* Upcoming events list -------------------------------------------------*/
  var upcomingList = document.querySelector("#upcoming-list");

  function renderUpcoming() {
    if (!upcomingList) return;

    var today = new Date();
    today.setHours(0, 0, 0, 0);
    var todayISO = toISODate(today.getFullYear(), today.getMonth(), today.getDate());

    var upcoming = events
      .filter(function (e) { return (e.endDate || e.date) >= todayISO; })
      .sort(function (a, b) { return a.date < b.date ? -1 : 1; });

    upcomingList.innerHTML = "";

    if (!upcoming.length) {
      upcomingList.innerHTML = '<p class="note-text">No upcoming events posted yet — check back soon.</p>';
      return;
    }

    upcoming.forEach(function (event) {
      var row = document.createElement("div");
      row.className = "event-row";

      var startObj = new Date(event.date + "T00:00:00");
      var dayLabel = String(startObj.getDate());
      if (event.endDate) {
        var endObj = new Date(event.endDate + "T00:00:00");
        dayLabel = startObj.getDate() + "–" + endObj.getDate();
      }
      var monthLabelText = startObj.toLocaleString("en-US", { month: "short" }).toUpperCase();

      var ctaLink = (event.links || [])[0];
      var ctaHTML = "";
      if (ctaLink) {
        if (ctaLink.tbc) {
          ctaHTML = '<a href="#" class="btn btn-tbc" data-tbc="1">' + (ctaLink.status || "TBA") + '</a>';
        } else {
          ctaHTML = '<a href="' + ctaLink.url + '" target="_blank" rel="noopener" class="btn btn-solid">Luma On! ↗</a>';
        }
      }

      var dayClass = event.endDate ? "day range" : "day";

      row.innerHTML =
        '<div class="date-block"><div class="' + dayClass + '">' + dayLabel + '</div><div class="month">' + monthLabelText + '</div></div>' +
        '<div><h3>' + event.title + '</h3><p class="meta">' + (event.location || "Details coming soon") + '</p></div>' +
        ctaHTML;

      row.addEventListener("click", function (e) {
        var link = e.target.closest("a");
        if (link && link.classList.contains("btn-tbc")) {
          e.preventDefault();
          openModal(event);
          return;
        }
        if (link) return;
        openModal(event);
      });

      upcomingList.appendChild(row);
    });
  }

  renderUpcoming();

  /* Event detail modal ---------------------------------------------------*/
  var modal = document.querySelector("#event-modal");
  var modalClose = document.querySelector("#modal-close");
  var modalImage = document.querySelector("#modal-image");
  var modalTag = document.querySelector("#modal-tag");
  var modalTitle = document.querySelector("#modal-title");
  var modalDate = document.querySelector("#modal-date");
  var modalTime = document.querySelector("#modal-time");
  var modalLocation = document.querySelector("#modal-location");
  var modalLinks = document.querySelector("#modal-links");

  function openModal(event) {
    if (!modal) return;
    var upcoming = !isPast(event.date);

    modalTag.textContent = upcoming ? "Upcoming" : "Past Event";

    if (event.image) {
      modalImage.src = event.image;
      modalImage.alt = event.title;
      modalImage.style.display = "block";
    } else {
      modalImage.style.display = "none";
    }

    modalTitle.textContent = event.title;

    var dateObj = new Date(event.date + "T00:00:00");
    var dateText = "📅 " + dateObj.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
    if (event.endDate) {
      var endObj = new Date(event.endDate + "T00:00:00");
      dateText = "📅 " + dateObj.toLocaleDateString("en-US", { month: "long", day: "numeric" }) + " – " + endObj.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
    }
    modalDate.textContent = dateText;
    modalTime.textContent = event.time ? "🕓 " + event.time : "";
    modalTime.style.display = event.time ? "block" : "none";
    modalLocation.textContent = event.location ? "📍 " + event.location : "";
    modalLocation.style.display = event.location ? "block" : "none";

    modalLinks.innerHTML = "";
    (event.links || []).forEach(function (link, i) {
      var a = document.createElement("a");
      a.href = link.url;
      a.textContent = link.label;
      if (link.tbc) {
        a.className = "btn btn-tbc";
        a.addEventListener("click", function (e) { e.preventDefault(); });
      } else {
        a.target = "_blank";
        a.rel = "noopener";
        a.className = "btn" + (i === 0 ? " btn-solid" : "");
      }
      modalLinks.appendChild(a);
    });

    modal.classList.add("open");
  }

  function closeModal() {
    if (modal) modal.classList.remove("open");
  }

  if (modal && modalClose) {
    modalClose.addEventListener("click", closeModal);
    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeModal();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeModal();
    });
  }

  /* Fullscreen video lightbox --------------------------------------------*/
  var videoThumb = document.querySelector("#video-thumb");
  var videoModal = document.querySelector("#video-modal");
  var videoModalClose = document.querySelector("#video-modal-close");
  var videoModalIframe = document.querySelector("#video-modal-iframe");
  var videoSrc = "https://www.youtube.com/embed/YCE1onLt8Vg?vq=hd1080&rel=0&autoplay=1";

  function openVideoModal() {
    if (!videoModal) return;
    videoModalIframe.src = videoSrc;
    videoModal.classList.add("open");
  }

  function closeVideoModal() {
    if (!videoModal) return;
    videoModal.classList.remove("open");
    videoModalIframe.src = "";
  }

  if (videoThumb && videoModal) {
    videoThumb.addEventListener("click", openVideoModal);
    videoModalClose.addEventListener("click", closeVideoModal);
    videoModal.addEventListener("click", function (e) {
      if (e.target === videoModal) closeVideoModal();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeVideoModal();
    });
  }

});
