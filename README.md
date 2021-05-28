# Chess By Daniel Reyes García
## **ENG**
This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

## Project Angular 🔧
```
Angular CLI version: 11.2.0
Node version: 14.15.5
Typescript version: 4.1.5
Database Firebase
```
## Run server
To Run the server use the command `ng serve`. Navigate to `http://localhost:4200/`.

## Material Components
In this project we use this Material Components:
* MatCard
* MatDialog
* MatSelect
* MatInput
* MatFormField
* MatTabs
* MatIcon
## Project Components
* GameComponent
* OpeningsComponent
* IntroComponent
* DialogContentIntro
* AppComponent (as the father)
## Services
In this project we can see two service, one is the sevice that connect with the database, the other one is to connect "long distance" components (board: father component, with components childs "MatCard").
## Model
This project had a model called Openings:
```
export interface openings {
  FEN: String,
  called: String,
  movements: String,
  name: String,
  origin: String,
  type: String,
}
```
openning* was a misstake
## SPA

Este proyecto fue generado a partir de [Angular CLI](https://github.com/angular/angular-cli).

## Info sobre el Proyecto Angular 🔧
```
Angular CLI version: 11.2.0
Node version: 14.15.5
Typescript version: 4.1.5
Database Firebase
```
## Run server
Para lanzar el servidor usar el comando `ng serve`. Y navegar a `http://localhost:4200/`.

## Componentes Material
En este proyecto se ha empleado los siguientes componentes de angular materials:
* MatCard
* MatDialog
* MatSelect
* MatInput
* MatFormField
* MatTabs
* MatIcon
## Components del Proyecto
* GameComponent
* OpeningsComponent
* IntroComponent
* DialogContentIntro
* AppComponent (padre)
## Servicios
Este proyecto contiene dos servicios, el primero es el que realiza la gestion de la información de la base de datos, y el segundo el que conecta los componentes lejanos.
## Modelo
Este proyecto cuenta con un modelo llamado Openings:
```
export interface openings {
  FEN: String,
  called: String,
  movements: String,
  name: String,
  origin: String,
  type: String,
}
```
Que hace referencia a las apertuuras del juego (aunque hay una errata ya que va con dos n's)
