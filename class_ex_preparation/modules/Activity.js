class Activity {
  constructor(activity, participants, type) {
    this.activity = activity;
    this.participants = participants;
    this.type = type;
  }

  // this is unnecessary, but useful if you would have multiple methods on this class
  get() {
    return {
      activity: this.activity,
      participants: this.participants,
      type: this.type,
    };
  }
}

class ActivityService {
  async getActivity() {
    const response = await fetch("https://www.boredapi.com/api/activity/");
    const data = await response.json();
    return new Activity(data.activity, data.participants, data.type);
  }

  renderActivity(activity) {
    const container = document.getElementById("activity-container");
    container.innerHTML = "";
    const div = document.createElement("div");
    div.innerHTML = `
    <span>${activity.activity} (with ${activity.participants} ${
      activity.participants > 1 ? `participants` : `participant`
    })</span>`;
    container.appendChild(div);
  }
}

const activityService = new ActivityService();
