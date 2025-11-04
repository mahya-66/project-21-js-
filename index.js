// const getMissions = async () => {
//   const response = await fetch("https://api.spacexdata.com/v3/missions");
//   const data = await response.json();
//   return data;
// };
// getMissions().then((missions) => {
//   console.log(missions);
// });
const getMissions = () => {
  return new Promise((resolve, reject) => {
    fetch("https://api.spacexdata.com/v3/missions")
      .then((response) => {
        if (!response.ok) {
          reject("Failed to load API!");
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch(() => {
        reject("Network Error!");
      });
  });
};
getMissions()
  .then((missions) => {
    const container = document.getElementById("missions");
    missions.forEach((mission) => {
      const missionDiv = document.createElement("div");
      missionDiv.style.border = "1px solid black";
      missionDiv.style.margin = "10px 0";
      missionDiv.style.padding = "10px";
      const title = document.createElement("h2");
      title.textContent = mission.mission_name;
      missionDiv.appendChild(title);
      Object.entries(mission).forEach(([key, value]) => {
        const text = document.createElement("p");
        text.textContent = `${key}: ${value}`;
        missionDiv.appendChild(text);
      });
      container.appendChild(missionDiv);
    });
  })
  .catch((error) => {
    console.log(error);
  });
