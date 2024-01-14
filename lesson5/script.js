// Задача

// Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка.

// Необязательная задача

// Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.

const url = 'https://jsonplaceholder.typicode.com/users';

async function getData(url) {
  try {
    const res = await fetch(url);
    const users = await res.json();
    displayUsers(users);
    return data;
  } catch (error) {
    console.log('no connect');
  }
}

function displayUsers(users) {
  const usersList = document.getElementById('usersList');
  usersList.innerHTML = '';
  users.forEach((user) => {
    const userItem = document.createElement('li');
    userItem.innerHTML = `${user.name}`;
    userItem.id = `user-${user.id}`;
    usersList.appendChild(userItem);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'удалить';
    userItem.appendChild(deleteButton);
    deleteButton.onclick = () => deleteUser(user.id);
  });
}

async function deleteUser(userId) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      {
        method: 'DELETE',
      }
    );
    if (res.status === 200) {
      const usersList = document.getElementById('usersList');
      const userItem = document.getElementById(`user-${userId}`);
      usersList.removeChild(userItem);
    } else {
      console.error('Failed to delete user');
    }
  } catch (error) {
    console.log('no connect');
  }
}

getData(url);
