import $ from "jquery";

class JAlert {
  static show(data) {
    if (data && typeof data === "object" && data !== null) {
      let alert_class;
      let alert_type = data.type && data.type !== null ? data.type : "default";

      switch (alert_type) {
        case "success":
          alert_class = "fa-check-double";
          break;
        case "fail":
          alert_class = "fa-ban";
          break;
        case "warning":
          alert_class = "fa-triangle-exclamation";
          break;
        default:
          alert_class = "fa-face-meh";
          break;
      }

      let alert_title = data.title && data.title !== null ? data.title : "";
      let alert_desc = data.desc && data.desc !== null ? data.desc : "";
      let alert_button = data.button && data.button !== null ? "<button class='closeError'>" + data.button + "</button>" : "";

      

      var alert_html = $(
        "<div class='jalert jalert_" +
          alert_type +
          "' id='alert_" +
          parseInt(Math.random(0, 10) * 1000) +
          "'>" +
          "<span class='closeError'>x</span>" +
          '<i class="fa-solid ' +
          alert_class +
          '"></i>' +
          "<h3>" +
          alert_title +
          "</h3>" +
          "<p>" +
          alert_desc +
          "</p>" +
          alert_button +
          "</div>"
      );

      var container = $("#jalert_container");

      if (!container.length) {
        let container_html =
          "<div id='jalert_container' class='jalert_container noselect'></div>";
        $("#root").append(container_html);
        container = $("#jalert_container");
      }

      container.append(alert_html);
      container.css("display", "block");

      $("body").css("overflow-y", "hidden");
      $("html").css("overflow-y", "hidden");

      $(".closeError").on("click", (e) => {
        $("body").css("overflow-y", "auto");
        $("html").css("overflow-y", "auto");

        container.html("");
        container.css("display", "none");
      });
    }
  }
}

export default JAlert;
