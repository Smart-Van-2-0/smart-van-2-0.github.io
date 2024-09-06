import styles from './styles.module.css';

// -----------------------------------------------
// Update following lists with the latest posts and releases

var array_posts = [
  { id: 1, title: "🧰 Workshop Make Your SmartVanBox at BITZ!", url: "/blog/2024/09/05/workshop-make-your-smartvanbox-at-bitz" },
  { id: 2, title: "👷 Make your SVBox Workshop @ BITZ Fab Lab, Bolzano", url: "/blog/2024/08/28/make-your-svbox-workshop-bitz" },
  { id: 3, title: "🚀 Released the SVBox 1.0's BOM List 1.0.1s", url: "/blog/2024/08/25/released-svbox-10-BOM" },
  { id: 4, title: "🌟 Introducing the New SVBox IoT 1.0", url: "/blog/2024/05/06/published-new-svbox-iot-10" },
  { id: 5, title: "🚀 Released JOD Smart Van v.1.0.0", url: "/blog/2023/12/05/released-jod-smart-van" },
  { id: 99, title: "More...", url: "/blog" },
]

// Default components' icons
// 📱 SmartVan Mobile App    the Mobile Apps
// 🧰 SVBox IoT              the Boxes
// 💿 JOD SmartVan Dist.      the Box's distribution
// 📦 FW ABC                 the Firmwares
var array_releases = [
  { id: 1, title: "🧰 SVBox IoT - v1.0.0", url: "/docs/hardware/svbox_10" },
  { id: 2, title: "📱 SmartVan Mobile App - v1.0.0", url: "/docs/software/sv_mobile_app/android" },
  { id: 3, title: "💿 JOD SmartVan Dist. - v1.0.0", url: "/docs/software/jod_smart_van/jod_smart_van" },
  { id: 4, title: "📦 FW Victron - v1.0.2", url: "/docs/software/firmware/fw_victron" },
  { id: 5, title: "📦 FW Victron - v1.0.1", url: "/docs/software/firmware/fw_victron" },
  { id: 99, title: "More...", url: "/docs/software" },
]
// -----------------------------------------------


var class_header = "sidebarItemTitle_node_modules-@docusaurus-theme-classic-lib-theme-BlogSidebar-Desktop-styles-module margin-bottom--md"
var class_list = "sidebarItemList_node_modules-@docusaurus-theme-classic-lib-theme-BlogSidebar-Desktop-styles-module clean-list"
var class_item = "sidebarItemLink_node_modules-@docusaurus-theme-classic-lib-theme-BlogSidebar-Desktop-styles-module"

export default function LatestSquare() {
  return (
    <section className={styles.container}>
        <Title title="Recent posts" />
        <List list={array_posts} />
        <Title title="Latest releases" />
        <List list={array_releases} />
    </section>
  );
}

function Title(prop) {
  return (
    <div class={class_header}>
      {prop.title}
    </div>
  );
}

function List(prop) {
  return (
    <ul class={class_list}>
      {prop.list.map(item => (
        <li key={item.id} className={styles.list_item}>
          <a class={class_item} href={item.url}>
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
