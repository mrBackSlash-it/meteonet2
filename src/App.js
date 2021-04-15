/* 
MIT License

Copyright (c) 2021 Associazione MeteoGargano
Copyright (c) 2021 Vittorio Lo Mele  [AUTHOR OF THIS FILE]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

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
        console.log({"onItemClick": "Clicked", e, i})
      },
      onCollapse(c) {
        console.log("onCollapse")
        this.collapsed = c
      }
    },
  };