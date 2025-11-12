# Material Design Navigation

This repository contains a solution for weekly assignment 3 in the course "Web- and Hybrid Technologies in Mobile Programming" at Oulu University of Applied Sciences.

The assignment is implemented as a React Native mobile application that demonstrates Material Design navigation using React Navigation and React Native Paper.

## Features

- **Custom Material Design App Bar** with conditional navigation icons
- **Stack Navigation** between Home and Second screens
- **Responsive navigation UI**:
  - Home screen: Arrow-right icon (navigate forward)
  - Second screen: Arrow-left icon (navigate back)

## Technologies

- React Native
- Expo
- React Navigation (Stack Navigator)
- React Native Paper (Material Design components)
- TypeScript

## Installation

```bash
npm install
```

## Running the App

```bash
npx expo start
```

## Project Structure

```
├── App.tsx                 # Main app component with navigation setup
├── components/
│   └── CustomAppBar.tsx   # Custom Material Design app bar
├── screens/
│   ├── HomeScreen.tsx     # Home screen
│   └── SecondScreen.tsx   # Second screen
└── assets/                # Images and other assets
```
