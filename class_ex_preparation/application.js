const activityButton = document.getElementById("activity-btn");

function addActivity(e) {
  e.preventDefault();
  const activity = activityService.getActivity();
  activity.then((activity) => activityService.renderActivity(activity));
}
activityButton.addEventListener("click", addActivity);
