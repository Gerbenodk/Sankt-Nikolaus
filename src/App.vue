<template>
  <div id="clock" class="light">
    <div class="display">
      <div class="weekdays"></div>
      <div class="ampm"></div>
      <div class="alarm"></div>
      <div class="digits"></div>
    </div>
  </div>

  <div class="button-holder">
    <a class="button eva">
      Eva
    </a><span>&</span>
    <a class="button tijmen">Tijmen</a>
  </div>
<div class="container">
  <p class="text" id="eva">Lieve Eva,<br><br>
    De sint heeft jou afgelopen jaar leren kennen en is blij dat jij onze familie komt vergezellen. Wat ben jij een hardwerkende en slimme meid, die voor studeren en een extra commissie erbij niet wijkt. Ook voor andere nieuwe uitdagingen ga je niet uit de weg, de eerste keer skiën, kletteren en mountainbiken toevallig allemaal vanaf een bergweg.<br><br>
    Door al die drukke bezigheden moet je slim omgaan met je tijd, van een wekker zoals jullie bedacht hadden krijg je daarom bepaald geen spijt. Jullie eigen plan voor een zelfgemaakte wekker, kon al haast niet gekker. Toch heeft de sint flink zijn best gedaan, tot aan het verkrijgen van grijze haren, om jullie plan te evenaren.<br><br>
    Mocht je met behulp van deze wekker toch wat tijd over hebben om te ontspannen, kijk dan maar snel in het linker laatje van het nachtkastje om je te laten inspireren en toch ook een beetje door te leren.<br><br>
    Liefs,<br>
    Sint en Piet</p>
  <p class="text" id="tijmen">Lieve Tijmen,<br><br>
    De spotlight richt zich nu op jou, dus laten we snel beginnen voordat we verkleumen in deze winterkou.  Ook jij bent heel druk met allerlei plannen bezig en bij verenigingen aanwezig. Klimmen bij de ESAC is wel echt jou ding, helaas is het prijzen pakken bij de EPlaKKa nog gering. ;) Op je studie gaat het wat beter, en daarnaast ben je gelukkig nog altijd een goede eter. Het eetpatroon is wel wat anders, vlees eten heeft vanwege onder andere het milieu toch wat tegenstanders.<br><br>
    Met deze wekker zijn we ook heel duurzaam bezig, het gedicht printen is alleen in het verleden nog aanwezig. Maak maar snel het rechter laatje van het nachtkastje open, hopelijk zonder het te slopen. Daar vind je literatuur over een fictief volgend avontuur.<br><br>
    Liefs,<br>
    (dezelfde) Sint en Piet<br><br>

    joe joe!
  </p>
</div>
</template>
<script>
$(function () {
  // Cache some selectors

  var clock = $("#clock"),
      ampm = clock.find(".ampm");

  // Map digits to their names (this will be an array)
  var digit_to_name = "zero one two three four five six seven eight nine".split(
      " "
  );

  // This object will hold the digit elements
  var digits = {};

  // Positions for the hours, minutes, and seconds
  var positions = ["h1", "h2", ":", "m1", "m2", ":", "s1", "s2"];

  // Generate the digits with the needed markup,
  // and add them to the clock

  var digit_holder = clock.find(".digits");

  $.each(positions, function () {
    if (this == ":") {
      digit_holder.append('<div class="dots">');
    } else {
      var pos = $("<div>");

      for (var i = 1; i < 8; i++) {
        pos.append('<span class="d' + i + '">');
      }

      // Set the digits as key:value pairs in the digits object
      digits[this] = pos;

      // Add the digit elements to the page
      digit_holder.append(pos);
    }
  });

  // Add the weekday names

  var weekday_names = "MON TUE WED THU FRI SAT SUN".split(" "),
      weekday_holder = clock.find(".weekdays");

  $.each(weekday_names, function () {
    weekday_holder.append("<span>" + this + "</span>");
  });

  var weekdays = clock.find(".weekdays span");

  // Run a timer every second and update the clock

  (function update_time() {
    // Use moment.js to output the current time as a string
    // hh is for the hours in 12-hour format,
    // mm - minutes, ss-seconds (all with leading zeroes),
    // d is for day of week and A is for AM/PM

    var now = moment().format("hhmmssdA");

    digits.h1.attr("class", digit_to_name[now[0]]);
    digits.h2.attr("class", digit_to_name[now[1]]);
    digits.m1.attr("class", digit_to_name[now[2]]);
    digits.m2.attr("class", digit_to_name[now[3]]);
    digits.s1.attr("class", digit_to_name[now[4]]);
    digits.s2.attr("class", digit_to_name[now[5]]);

    // The library returns Sunday as the first day of the week.
    // Stupid, I know. Lets shift all the days one position down,
    // and make Sunday last

    var dow = now[6];
    dow--;

    // Sunday!
    if (dow < 0) {
      // Make it last
      dow = 6;
    }

    // Mark the active day of the week
    weekdays.removeClass("active").eq(dow).addClass("active");

    // Set the am/pm text:
    ampm.text(now[7] + now[8]);

    // Schedule this function to be run again in 1 sec
    setTimeout(update_time, 1000);
  })();

  // Switch the theme

  // $("a.button").click(function () {
  //   clock.toggleClass("light dark");
  //   eva.toggleClass("on off");
  //   tijmen.toggleClass("off on");
  // });


  $(".eva").click(function(){
    $("#tijmen").removeClass("toggle");
    $("#eva").toggleClass("toggle");
    clock.toggleClass("light dark");
  });
  $(".tijmen").click(function(){
    $("#eva").removeClass("toggle");
    $("#tijmen").toggleClass("toggle");
    clock.toggleClass("light dark");
  });
});

</script>


<!--<script>-->
<!--export default {-->
<!--  components: {-->
<!--  },-->
<!--  computed: {-->
<!--  },-->
<!--}-->

<!--</script>-->
