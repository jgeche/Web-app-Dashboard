// --- alert ---- //

const alert = document.getElementById('alert');
alert.innerHTML =
  `
  <div class='alert-banner'>
    <p><strong>Alert:</strong> You have 2 unread messages</p>
    <p class='alert-banner-close'>x</p>
  </div>
  `
alert.addEventListener('click', e => {
  const element = e.target;
  if (element.classList.contains('alert-banner-close')) {
    alert.style.display = 'none';
  }
});

// ------ notification section ------- //

const notification1 = document.getElementById('notification');
const notification2 = document.querySelector('.online');
const notification3 = document.querySelector('.notification');

function Notification1() {
  notification2.style.display = 'none';
  if (notification3.length === 0) {
      notification1.style.display = 'none';
  } else {
      notification1.style.display = 'initial';
  }
}

function Notification2() {
  if (notification3.length > 0) {
    notification2.style.display = 'initial';
  }
  notification1.style.display = 'none';
}

notification1.addEventListener('click', e => {
  const element = e.target;
  const notification = element.parentNode;
  if (element.classList.contains('notification-delete')) {
      notification.style.display = 'none';
  }
});

// -------- line graph -------- //

const trafficNav = document.querySelectorAll('.traffic-nav-link');
document.addEventListener('click', e => {
  const element = e.target;
  if (element.classList.contains('traffic-nav-link')) {
    element.classList.add('active');
    for (let i = 0; i < trafficNavLink.length; i++) {
      if (trafficNavLink[i] !== element && trafficNavLink[i].classList.contains('active')) {
        trafficNavLink[i].classList.remove('active');
      }
    }
  }
});

const traffic = document.getElementById('traffic-chart');

let trafficHourly =
  {labels : ['0-2', '2-4', '4-6', '6-8', '8-10', '10-12', '12-14', '14-16', '16-18', '18-20', '20-22', '22-24'],
  datasets:
    [{data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500, 2000],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1
    }]
  };

let trafficDaily =
  {labels : ['0-2', '2-4', '4-6', '6-8', '8-10', '10-12', '12-14', '14-16', '16-18', '18-20', '20-22', '22-24'],
  datasets:
    [{data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500, 2000],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1
    }]
  };

let trafficWeekly =
   {labels : ['0-2', '2-4', '4-6', '6-8', '8-10', '10-12', '12-14', '14-16', '16-18', '18-20', '20-22', '22-24'],
  datasets:
    [{data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500, 2000],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1
    }]
  };

let trafficMonthly =
  {labels : ['0-2', '2-4', '4-6', '6-8', '8-10', '10-12', '12-14', '14-16', '16-18', '18-20', '20-22', '22-24'],
  datasets:
    [{data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500, 2000],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1
    }]
  };

let traffic1 = {
  responsive: true,
  apsectRatio: 2.5,
  animation: {
    duration: 0
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  },
  legend: {
    display: false
  }
};

let trafficChart = new Chart(traffic, {
  type: 'line',
  data: trafficHourly,
  options: traffic1
});

// --------- bar chart -------- //

const daily = document.getElementById('daily-traffic-chart');

let daily1 =
  {labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  datasets: [{
    label: '# of hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
  }]
};

const daily2 = {
  responsive: true,
  apsectRatio: 2.5,
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  },
  legend: {
      display: false
  }
};

let dailyChart = new Chart(daily, {
  type: 'bar',
  data: daily1,
  options: daily2
});

// ------ Pie chart ------ //

const mobile = document.getElementById('mobile-users-chart');

let mobile1 =
  {labels: ['Desktop', 'Tablet', 'Phones'],
  datasets: [{
    label: '# of users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
      '#7477BF',
      '#78CF82',
      '#51B6C8'
    ]
  }]
};

const mobile2 = {
  legend: {
    position: 'right',
    align: 'center',
    labels: {
      boxWidth: 20,
      fontStyle: 'bold'
    }
  }
};

let mobileChart = new Chart(mobile, {
  type: 'doughnut',
  data: mobile1,
  options: mobile2
});

// ---------- message --------- //

const user = document.getElementById('user-field');
const message = document.getElementById('message-field');
const send = document.getElementById('send')

send.addEventListener('click', () => {
  if (user.value === '' && message.value === '') {
    window.alert("The 'user' field and the 'message' field must be filled out.");
  } else if (user.value === '' && message.value !== '') {
    window.alert("The 'user' field must be filled out.");
  } else if (user.value !== '' && message.value === '') {
    window.alert("The 'message' field must be filled out.");
  } else {
    window.alert(`The message has been sent to ${user.value}`);
    user.value = '';
    message.value = '';
  }
});