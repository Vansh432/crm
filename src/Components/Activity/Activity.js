
import ActivityItem from './ActivityComponent';

function Activity() {
  const activities = [
    {
      icon: "https://via.placeholder.com/40",
      title: "Purchased from MediaTek",
      description: "Lorem ipsum dolor sit amet consecte",
      images: ["https://html.bdevs.net/manez.prev/assets/images/product/item1.png", "https://html.bdevs.net/manez.prev/assets/images/product/item2.png","https://html.bdevs.net/manez.prev/assets/images/product/item3.png"],
      timeAgo: "04 Mins Ago"
    },
    {
      icon: "https://via.placeholder.com/40",
      title: "Purchased from MediaTek",
      description: "Lorem ipsum dolor sit amet consecte",
      images: ["https://html.bdevs.net/manez.prev/assets/images/avatar/avatar1.png", "https://html.bdevs.net/manez.prev/assets/images/avatar/avatar2.png", ],
      timeAgo: "04 Mins Ago"
    },
    {
      icon: "https://via.placeholder.com/40",
      title: "Purchased from MediaTek",
      description: "Lorem ipsum dolor sit amet consecte",
      highlight: "3 days left notification to submit new products",
      timeAgo: "04 Mins Ago"
    }
  ];

  return (
    <div className="activity shadow-[0_4px_8px_rgba(0,0,0,0.1)] rounded-[10px] bg-[#fff] p-[20px]">
      <h2 className='text-[20px] text-[#444050] font-[600]'>Recent Activity</h2>
      {activities.map((activity, index) => (
        <ActivityItem
          key={index}
          icon={activity.icon}
          title={activity.title}
          description={activity.description}
          images={activity.images}
          timeAgo={activity.timeAgo}
          highlight={activity.highlight}
        />
      ))}
    </div>
  );
}

export default Activity;
