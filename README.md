# Finance Tracker (Angular + .NET API)

A full-stack Finance Tracker application built with **Angular** (frontend) and **ASP.NET Core Web API** (backend).  
The app allows users to manage **Income** and **Expense** entries with clean routing, modular components, and API integration.

---

## 📁 Project Structure
finance-tracker/ │ 
  ├── finance-tracker-api/   # ASP.NET Core Web API │   
    ├── Controllers/ │   
    ├── Models/ │   
    ├── Program.cs │   
    └── ... 
  │ └── finance-tracker-ui/   # Angular Frontend     
    ├── src/app/components/ │   
    ├── income/ 
    │── expense/ 
    ├── src/app/services/ 
    ├── src/app/models/ 
    |── ..
    
---
## ✅ Features

### **Backend (ASP.NET Core API)**
- Income API  
  - `GET /api/income`
  - `POST /api/income`
- Expense API  
  - `GET /api/expense`
  - `POST /api/expense`
- CORS enabled for Angular
- In-memory data storage (DB integration coming soon)

### **Frontend (Angular)**
- Separate components:
  - `/income`
  - `/expense`
- Angular routing
- Services for API communication
- Models for strong typing
- Forms for adding entries
- Live list updates

---
## 🚀 Getting Started

### **1. Clone the Repository**
```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd finance-tracker


🖥️ Backend Setup (ASP.NET Core API)
Install dependencies

  
