export default {
    name: "WeatherLab360",
    data() {
      return {
        menu: [
          {
            href: "/",
            title: "Map",
            icon: "fa fa-map"
          },
          {
            href: "/details",
            title: "Station Details",
            icon: "fa fa-cloud-sun"
          },
          {
            href: "/archive",
            title: "Archive",
            icon: "fa fa-database"
          },
          {
            href: "/webcams",
            title: "Webcams",
            icon: "fa fa-video"
          },
          {
            href: "/credits",
            title: "Credits",
            icon: "fa fa-info-circle"
          },
        ],
        collapsed: true,
        width:"190px"
      };
    },
    methods: {
      onItemClick(e, i) {
        console.log({"onItemClick": "Clicked", e, i});
      },
      onCollapse(c) {
        console.log("onCollapse");
        this.collapsed = c;
      }
    },
  };