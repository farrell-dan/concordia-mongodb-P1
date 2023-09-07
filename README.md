# Introduction to MongoDB

## 🦊 Pre-lecture

There is no pre-lecture for this workshop.

---

## 🦉 Lecture

- [Lecture 1 | Introduction](lecture/lecture-1-introduction.md)
- [Lecture 2 | CRUD](lecture/lecture-2-crud.md)

---

## Setup

```
yarn install
```

## Setup MongoDB Atlas Account

For the MongoDB workshops, we will be using mongoDB Atlas. It is a cloud DB service.

Go to [mongodb.com](https://www.mongodb.com/cloud/atlas) and click **Try Free** to signup.

Use the google signin to accelerate the process.

1. Sign up with Google.

![mongo_signup](./lecture/assets/step-1-signup.gif)

2. Create an organization, call it whatever you like.

![mongo_org](./lecture/assets/step-2-org.gif)

3. Create a project, call it whatever you like.

![mongo_project](./lecture/assets/step-3-project.gif)

4. Build a cluster
- Select the free tier.
- Accept default settings.
- Create a user by adding a username and password under `How would you like to authenticate your connection?`.
- Add your current IP Address by clicking on `Add My Current IP Address` under `Where would you like to connect from?` (this may take a while).
- Once your IP Address is loaded in, click on `Finish and Close` then `Go to Database`.
- **⚠️ WAIT FOR THE BLUE BAR TO DISAPPEAR BEFORE MOVING ONTO STEP 5 ⚠️** 
    - The blue bar is MongoDB applying all the changes we just made. It will take a few minutes.

![mongo_cluster](./lecture/assets/step-4-cluster.gif)

5. Create a Database
- Click on `Browse Collections`.
- Click on `Add My Own Data`.
- Create a database called `exercise_1`.
- Create a collection called `users`.

![mongo_db](./lecture/assets/step-5-db.gif)

6. Add access from anywhere
    - Click on `NetWork Access` in the sidebar.
    - Click on `+Add IP Address`.
    - Click on `Allow Access from Anywhere`.
    - Click on `Confirm`.
    - Wait for the blue bar to disappear (this may take a while).

![mongo_ip](./lecture/assets/step-6-ip.gif)

7. Get the connection key
    - Click on `Connect`.
    - Click on `Connect your application`.
    - Copy the connection string. It will look something like this.

```
    mongodb+srv://rony:<password>@cluster0.tjwvx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```

![mongo_connect](./lecture/assets/step-7-connect.gif)

8. The environtment file

- Create a `.env` file in the root of the project
    - Right click, select `New File` and simply call it `.env`
- Add the connection string to that file under the name MONGO_URI: 

```
MONGO_URI=mongodb+srv://rony:<password>@cluster0.tjwvx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```

**Replace `<password>` and `myFirstDatabase` with actual values.**

- `<password>` is the password you assigned to the user you created in step 4
- `myFirstDatabase` is the name of the database (See exercise-1.1)

**Example**
```
MONGO_URI=mongodb+srv://rony:superAmazingPassword1@cluster0.tjwvx.mongodb.net/superCoolDatabaseName?retryWrites=true&w=majority
```


---


## ⚡ Exercises

### [Exercise 1.1](workshop/exercise-1.1.md)

### [Exercise 1.2](workshop/exercise-1.2.md)

### [Exercise 1.3](workshop/exercise-1.3.md)

### [Exercise 1.4](workshop/exercise-1.4.md)

### [Exercise 2.1](workshop/exercise-2.1.md)

### [Exercise 2.2](workshop/exercise-2.2.md)

### [Exercise 2.3](workshop/exercise-2.3.md)

### [Exercise 2.4](workshop/exercise-2.4.md)

### [Exercise 2.5](workshop/exercise-2.5.md)

### [Exercise 2.6](workshop/exercise-2.6.md)

---

<center>🟢 - Complete workshop (100%) - 🟢</center>

---
