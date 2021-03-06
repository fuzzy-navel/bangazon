USE [master]
GO
/****** Object:  Database [Bangazon]    Script Date: 12/11/2018 9:08:03 PM ******/
CREATE DATABASE [Bangazon]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Bangazon', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\Bangazon.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Bangazon_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\Bangazon_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [Bangazon] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Bangazon].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Bangazon] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Bangazon] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Bangazon] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Bangazon] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Bangazon] SET ARITHABORT OFF 
GO
ALTER DATABASE [Bangazon] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Bangazon] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Bangazon] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Bangazon] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Bangazon] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Bangazon] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Bangazon] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Bangazon] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Bangazon] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Bangazon] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Bangazon] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Bangazon] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Bangazon] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Bangazon] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Bangazon] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Bangazon] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Bangazon] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Bangazon] SET RECOVERY FULL 
GO
ALTER DATABASE [Bangazon] SET  MULTI_USER 
GO
ALTER DATABASE [Bangazon] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Bangazon] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Bangazon] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Bangazon] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Bangazon] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'Bangazon', N'ON'
GO
ALTER DATABASE [Bangazon] SET QUERY_STORE = OFF
GO
USE [Bangazon]
GO
ALTER DATABASE SCOPED CONFIGURATION SET IDENTITY_CACHE = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
GO
USE [Bangazon]
GO
/****** Object:  Table [dbo].[computer]    Script Date: 12/11/2018 9:08:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[computer](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[purchase_date] [datetime] NOT NULL,
	[decommissioned] [datetime] NULL,
	[employee_id] [int] NULL,
	[in_use] [bit] NOT NULL,
	[is_malfunctioning] [bit] NOT NULL,
	[make] [varchar](50) NOT NULL,
	[model] [varchar](50) NOT NULL,
 CONSTRAINT [PK__computer__3213E83FCBD1F7B0] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[customer]    Script Date: 12/11/2018 9:08:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[customer](
	[first_name] [varchar](255) NOT NULL,
	[last_name] [varchar](255) NOT NULL,
	[date_joined] [datetime] NOT NULL,
	[active] [bit] NOT NULL,
	[id] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK__customer__3213E83F85423B68] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[department]    Script Date: 12/11/2018 9:08:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[department](
	[name] [varchar](255) NOT NULL,
	[expense_budget] [int] NOT NULL,
	[supervisor_id] [int] NULL,
	[id] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK__departme__3213E83F9F8D443F] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[employee]    Script Date: 12/11/2018 9:08:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[employee](
	[name] [varchar](255) NOT NULL,
	[is_supervisor] [bit] NOT NULL,
	[department_id] [int] NOT NULL,
	[id] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK__employee__3213E83FEA1746C8] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[employee_training_program_pair]    Script Date: 12/11/2018 9:08:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[employee_training_program_pair](
	[training_program_id] [int] NOT NULL,
	[employee_id] [int] NOT NULL,
	[id] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK__employee__3213E83F8599B7FD] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[order_product_pair]    Script Date: 12/11/2018 9:08:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[order_product_pair](
	[order_id] [int] NOT NULL,
	[product_id] [int] NOT NULL,
	[id] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK__order_pr__3213E83F5FC92363] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[orders]    Script Date: 12/11/2018 9:08:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[orders](
	[customer_id] [int] NOT NULL,
	[order_status] [bit] NOT NULL,
	[can_complete] [bit] NOT NULL,
	[payment_type_id] [int] NOT NULL,
	[id] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK__orders__3213E83F4CF09FF0] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[payment_type]    Script Date: 12/11/2018 9:08:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[payment_type](
	[account_number] [int] NOT NULL,
	[customer_id] [int] NOT NULL,
	[active] [bit] NOT NULL,
	[title] [nvarchar](500) NULL,
	[id] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK__payment___3213E83FD0F55F83] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[product]    Script Date: 12/11/2018 9:08:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[product](
	[category] [int] NOT NULL,
	[price] [decimal](18, 0) NOT NULL,
	[title] [varchar](255) NOT NULL,
	[description] [varchar](255) NOT NULL,
	[quantity] [int] NOT NULL,
	[owner_id] [int] NOT NULL,
	[id] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK__product__3213E83F9BE391B5] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[product_types]    Script Date: 12/11/2018 9:08:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[product_types](
	[category] [varchar](255) NOT NULL,
	[id] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK__product___3213E83FD4D7E369] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[training_programs]    Script Date: 12/11/2018 9:08:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[training_programs](
	[start_date] [datetime] NOT NULL,
	[end_date] [datetime] NOT NULL,
	[max_attendees] [int] NOT NULL,
	[id] [int] IDENTITY(1,1) NOT NULL,
	[title] [varchar](50) NOT NULL,
 CONSTRAINT [PK__training__3213E83F6BB37FB3] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[computer] ON 

INSERT [dbo].[computer] ([id], [purchase_date], [decommissioned], [employee_id], [in_use], [is_malfunctioning], [make], [model]) VALUES (1, CAST(N'2016-06-04T00:00:00.000' AS DateTime), CAST(N'2016-06-04T00:00:00.000' AS DateTime), 1, 1, 0, N'Dell', N'IS342')
INSERT [dbo].[computer] ([id], [purchase_date], [decommissioned], [employee_id], [in_use], [is_malfunctioning], [make], [model]) VALUES (2, CAST(N'2017-07-12T00:00:00.000' AS DateTime), NULL, 2, 1, 0, N'Asus', N'E-12')
INSERT [dbo].[computer] ([id], [purchase_date], [decommissioned], [employee_id], [in_use], [is_malfunctioning], [make], [model]) VALUES (3, CAST(N'2016-08-15T00:00:00.000' AS DateTime), NULL, 3, 1, 0, N'Apple', N'Macbook')
INSERT [dbo].[computer] ([id], [purchase_date], [decommissioned], [employee_id], [in_use], [is_malfunctioning], [make], [model]) VALUES (4, CAST(N'2018-09-19T00:00:00.000' AS DateTime), NULL, 4, 1, 0, N'Asus', N'E-12')
INSERT [dbo].[computer] ([id], [purchase_date], [decommissioned], [employee_id], [in_use], [is_malfunctioning], [make], [model]) VALUES (5, CAST(N'2015-10-13T00:00:00.000' AS DateTime), NULL, 5, 1, 0, N'Apple', N'Macbook')
INSERT [dbo].[computer] ([id], [purchase_date], [decommissioned], [employee_id], [in_use], [is_malfunctioning], [make], [model]) VALUES (6, CAST(N'2016-03-11T00:00:00.000' AS DateTime), NULL, 6, 1, 0, N'Asus', N'E-12')
INSERT [dbo].[computer] ([id], [purchase_date], [decommissioned], [employee_id], [in_use], [is_malfunctioning], [make], [model]) VALUES (7, CAST(N'2015-04-12T00:00:00.000' AS DateTime), NULL, 7, 1, 0, N'Apple', N'Macbook')
INSERT [dbo].[computer] ([id], [purchase_date], [decommissioned], [employee_id], [in_use], [is_malfunctioning], [make], [model]) VALUES (8, CAST(N'2017-03-12T00:00:00.000' AS DateTime), NULL, 8, 1, 0, N'Asus', N'E-12')
INSERT [dbo].[computer] ([id], [purchase_date], [decommissioned], [employee_id], [in_use], [is_malfunctioning], [make], [model]) VALUES (9, CAST(N'2016-05-11T00:00:00.000' AS DateTime), NULL, 9, 1, 0, N'Dell', N'IS342')
INSERT [dbo].[computer] ([id], [purchase_date], [decommissioned], [employee_id], [in_use], [is_malfunctioning], [make], [model]) VALUES (10, CAST(N'1945-06-29T00:00:00.000' AS DateTime), NULL, 10, 1, 0, N'Apple', N'Macbook')
INSERT [dbo].[computer] ([id], [purchase_date], [decommissioned], [employee_id], [in_use], [is_malfunctioning], [make], [model]) VALUES (11, CAST(N'2017-09-24T00:00:00.000' AS DateTime), CAST(N'2018-10-23T00:00:00.000' AS DateTime), 2, 1, 0, N'Asus', N'E-12')
INSERT [dbo].[computer] ([id], [purchase_date], [decommissioned], [employee_id], [in_use], [is_malfunctioning], [make], [model]) VALUES (12, CAST(N'2017-12-25T00:00:00.000' AS DateTime), CAST(N'2017-12-26T00:00:00.000' AS DateTime), NULL, 0, 1, N'Dell', N'IS342')
INSERT [dbo].[computer] ([id], [purchase_date], [decommissioned], [employee_id], [in_use], [is_malfunctioning], [make], [model]) VALUES (1011, CAST(N'2018-07-12T00:00:00.000' AS DateTime), CAST(N'1753-01-01T00:00:00.000' AS DateTime), 7, 1, 0, N'Apple', N'Macbook')
SET IDENTITY_INSERT [dbo].[computer] OFF
SET IDENTITY_INSERT [dbo].[customer] ON 

INSERT [dbo].[customer] ([first_name], [last_name], [date_joined], [active], [id]) VALUES (N'tz', N'Belushi', CAST(N'2010-11-23T00:00:00.000' AS DateTime), 1, 1)
INSERT [dbo].[customer] ([first_name], [last_name], [date_joined], [active], [id]) VALUES (N'Sam', N'Poodles', CAST(N'1999-12-02T00:00:00.000' AS DateTime), 1, 2)
INSERT [dbo].[customer] ([first_name], [last_name], [date_joined], [active], [id]) VALUES (N'Barry', N'Blues', CAST(N'2018-12-02T00:00:00.000' AS DateTime), 1, 3)
INSERT [dbo].[customer] ([first_name], [last_name], [date_joined], [active], [id]) VALUES (N'Andy', N'Anderson', CAST(N'2017-03-03T00:00:00.000' AS DateTime), 1, 4)
INSERT [dbo].[customer] ([first_name], [last_name], [date_joined], [active], [id]) VALUES (N'Alex', N'Azell', CAST(N'2017-03-20T00:00:00.000' AS DateTime), 1, 5)
INSERT [dbo].[customer] ([first_name], [last_name], [date_joined], [active], [id]) VALUES (N'Lola', N'Orange', CAST(N'2017-03-20T00:00:00.000' AS DateTime), 1, 6)
INSERT [dbo].[customer] ([first_name], [last_name], [date_joined], [active], [id]) VALUES (N'Nathan', N'Newsome', CAST(N'2018-10-20T00:00:00.000' AS DateTime), 1, 7)
INSERT [dbo].[customer] ([first_name], [last_name], [date_joined], [active], [id]) VALUES (N'Meli', N'Frank', CAST(N'2000-05-03T00:00:00.000' AS DateTime), 1, 8)
INSERT [dbo].[customer] ([first_name], [last_name], [date_joined], [active], [id]) VALUES (N'Bob', N'Thebuilder', CAST(N'2000-07-03T00:00:00.000' AS DateTime), 0, 9)
INSERT [dbo].[customer] ([first_name], [last_name], [date_joined], [active], [id]) VALUES (N'Natalie', N'Peters', CAST(N'2001-09-03T00:00:00.000' AS DateTime), 0, 10)
INSERT [dbo].[customer] ([first_name], [last_name], [date_joined], [active], [id]) VALUES (N'William', N'Williams', CAST(N'2014-08-03T00:00:00.000' AS DateTime), 0, 11)
INSERT [dbo].[customer] ([first_name], [last_name], [date_joined], [active], [id]) VALUES (N'Molly', N'Moped', CAST(N'2015-04-23T00:00:00.000' AS DateTime), 0, 12)
INSERT [dbo].[customer] ([first_name], [last_name], [date_joined], [active], [id]) VALUES (N'Bruce', N'Wild', CAST(N'2018-04-02T00:00:00.000' AS DateTime), 0, 13)
INSERT [dbo].[customer] ([first_name], [last_name], [date_joined], [active], [id]) VALUES (N'John', N'Baptiste', CAST(N'2018-11-10T00:00:00.000' AS DateTime), 1, 14)
INSERT [dbo].[customer] ([first_name], [last_name], [date_joined], [active], [id]) VALUES (N'John', N'Doe', CAST(N'2018-11-30T00:00:00.000' AS DateTime), 1, 1002)
INSERT [dbo].[customer] ([first_name], [last_name], [date_joined], [active], [id]) VALUES (N'Barry', N'Bluee', CAST(N'2018-12-01T00:00:00.000' AS DateTime), 1, 1003)
SET IDENTITY_INSERT [dbo].[customer] OFF
SET IDENTITY_INSERT [dbo].[department] ON 

INSERT [dbo].[department] ([name], [expense_budget], [supervisor_id], [id]) VALUES (N'HumanResources', 50, 1, 1)
INSERT [dbo].[department] ([name], [expense_budget], [supervisor_id], [id]) VALUES (N'IT', 100000, 6, 2)
INSERT [dbo].[department] ([name], [expense_budget], [supervisor_id], [id]) VALUES (N'Sales', 150000, 7, 3)
INSERT [dbo].[department] ([name], [expense_budget], [supervisor_id], [id]) VALUES (N'HelpDesk', 25000, 4, 4)
INSERT [dbo].[department] ([name], [expense_budget], [supervisor_id], [id]) VALUES (N'Photography', 1000000, 5, 5)
INSERT [dbo].[department] ([name], [expense_budget], [supervisor_id], [id]) VALUES (N'Shipping', 20000, 7, 1002)
INSERT [dbo].[department] ([name], [expense_budget], [supervisor_id], [id]) VALUES (N'Accounts Receivable', 12, NULL, 2020)
INSERT [dbo].[department] ([name], [expense_budget], [supervisor_id], [id]) VALUES (N'BlahdeeBlah', 2000, 4, 2024)
INSERT [dbo].[department] ([name], [expense_budget], [supervisor_id], [id]) VALUES (N'asdasdas', 21321, 2, 2026)
SET IDENTITY_INSERT [dbo].[department] OFF
SET IDENTITY_INSERT [dbo].[employee] ON 

INSERT [dbo].[employee] ([name], [is_supervisor], [department_id], [id]) VALUES (N'Frank', 1, 1, 1)
INSERT [dbo].[employee] ([name], [is_supervisor], [department_id], [id]) VALUES (N'James', 0, 2, 2)
INSERT [dbo].[employee] ([name], [is_supervisor], [department_id], [id]) VALUES (N'Jimothy', 0, 3, 3)
INSERT [dbo].[employee] ([name], [is_supervisor], [department_id], [id]) VALUES (N'Rotunda', 1, 4, 4)
INSERT [dbo].[employee] ([name], [is_supervisor], [department_id], [id]) VALUES (N'Yamil', 1, 5, 5)
INSERT [dbo].[employee] ([name], [is_supervisor], [department_id], [id]) VALUES (N'Michelle', 1, 2, 6)
INSERT [dbo].[employee] ([name], [is_supervisor], [department_id], [id]) VALUES (N'Larrence', 1, 3, 7)
INSERT [dbo].[employee] ([name], [is_supervisor], [department_id], [id]) VALUES (N'Matisyahu', 1, 1002, 8)
INSERT [dbo].[employee] ([name], [is_supervisor], [department_id], [id]) VALUES (N'Ed', 0, 1, 9)
INSERT [dbo].[employee] ([name], [is_supervisor], [department_id], [id]) VALUES (N'Steve', 0, 5, 10)
INSERT [dbo].[employee] ([name], [is_supervisor], [department_id], [id]) VALUES (N'Johnplashuous', 0, 3, 11)
SET IDENTITY_INSERT [dbo].[employee] OFF
SET IDENTITY_INSERT [dbo].[employee_training_program_pair] ON 

INSERT [dbo].[employee_training_program_pair] ([training_program_id], [employee_id], [id]) VALUES (1, 1, 3)
INSERT [dbo].[employee_training_program_pair] ([training_program_id], [employee_id], [id]) VALUES (2, 2, 4)
INSERT [dbo].[employee_training_program_pair] ([training_program_id], [employee_id], [id]) VALUES (3, 3, 5)
INSERT [dbo].[employee_training_program_pair] ([training_program_id], [employee_id], [id]) VALUES (4, 4, 6)
INSERT [dbo].[employee_training_program_pair] ([training_program_id], [employee_id], [id]) VALUES (5, 5, 8)
INSERT [dbo].[employee_training_program_pair] ([training_program_id], [employee_id], [id]) VALUES (6, 6, 9)
INSERT [dbo].[employee_training_program_pair] ([training_program_id], [employee_id], [id]) VALUES (7, 7, 10)
SET IDENTITY_INSERT [dbo].[employee_training_program_pair] OFF
SET IDENTITY_INSERT [dbo].[order_product_pair] ON 

INSERT [dbo].[order_product_pair] ([order_id], [product_id], [id]) VALUES (1, 5, 2)
INSERT [dbo].[order_product_pair] ([order_id], [product_id], [id]) VALUES (2, 6, 3)
INSERT [dbo].[order_product_pair] ([order_id], [product_id], [id]) VALUES (2, 7, 4)
INSERT [dbo].[order_product_pair] ([order_id], [product_id], [id]) VALUES (3, 6, 5)
INSERT [dbo].[order_product_pair] ([order_id], [product_id], [id]) VALUES (4, 9, 6)
INSERT [dbo].[order_product_pair] ([order_id], [product_id], [id]) VALUES (4, 8, 7)
INSERT [dbo].[order_product_pair] ([order_id], [product_id], [id]) VALUES (4, 7, 8)
INSERT [dbo].[order_product_pair] ([order_id], [product_id], [id]) VALUES (5, 6, 9)
INSERT [dbo].[order_product_pair] ([order_id], [product_id], [id]) VALUES (5, 9, 10)
SET IDENTITY_INSERT [dbo].[order_product_pair] OFF
SET IDENTITY_INSERT [dbo].[orders] ON 

INSERT [dbo].[orders] ([customer_id], [order_status], [can_complete], [payment_type_id], [id]) VALUES (1, 1, 1, 1, 1)
INSERT [dbo].[orders] ([customer_id], [order_status], [can_complete], [payment_type_id], [id]) VALUES (2, 0, 0, 2, 2)
INSERT [dbo].[orders] ([customer_id], [order_status], [can_complete], [payment_type_id], [id]) VALUES (3, 1, 1, 3, 3)
INSERT [dbo].[orders] ([customer_id], [order_status], [can_complete], [payment_type_id], [id]) VALUES (4, 0, 1, 4, 4)
INSERT [dbo].[orders] ([customer_id], [order_status], [can_complete], [payment_type_id], [id]) VALUES (5, 1, 0, 5, 5)
INSERT [dbo].[orders] ([customer_id], [order_status], [can_complete], [payment_type_id], [id]) VALUES (5, 1, 1, 4, 2002)
SET IDENTITY_INSERT [dbo].[orders] OFF
SET IDENTITY_INSERT [dbo].[payment_type] ON 

INSERT [dbo].[payment_type] ([account_number], [customer_id], [active], [title], [id]) VALUES (12345, 1, 1, N'My Visa', 1)
INSERT [dbo].[payment_type] ([account_number], [customer_id], [active], [title], [id]) VALUES (23456, 2, 1, N'My Mastercard', 2)
INSERT [dbo].[payment_type] ([account_number], [customer_id], [active], [title], [id]) VALUES (34567, 3, 1, N'Main Account', 3)
INSERT [dbo].[payment_type] ([account_number], [customer_id], [active], [title], [id]) VALUES (45678, 4, 1, N'Savings Account', 4)
INSERT [dbo].[payment_type] ([account_number], [customer_id], [active], [title], [id]) VALUES (56789, 5, 1, N'My AmEx', 5)
INSERT [dbo].[payment_type] ([account_number], [customer_id], [active], [title], [id]) VALUES (56754, 2, 0, N'MINE', 6)
INSERT [dbo].[payment_type] ([account_number], [customer_id], [active], [title], [id]) VALUES (987654, 1, 1, N'Savings Account', 7)
INSERT [dbo].[payment_type] ([account_number], [customer_id], [active], [title], [id]) VALUES (22334455, 2, 0, NULL, 1006)
SET IDENTITY_INSERT [dbo].[payment_type] OFF
SET IDENTITY_INSERT [dbo].[product] ON 

INSERT [dbo].[product] ([category], [price], [title], [description], [quantity], [owner_id], [id]) VALUES (1, CAST(2 AS Decimal(18, 0)), N'thing12', N'thing12 is great, really great!', 1, 1, 5)
INSERT [dbo].[product] ([category], [price], [title], [description], [quantity], [owner_id], [id]) VALUES (1, CAST(101111 AS Decimal(18, 0)), N'UPDATED!!.....TWICE!!', N'Something great', 32, 5, 6)
INSERT [dbo].[product] ([category], [price], [title], [description], [quantity], [owner_id], [id]) VALUES (3, CAST(10000 AS Decimal(18, 0)), N'computer1', N'computer1 is great', 5, 3, 7)
INSERT [dbo].[product] ([category], [price], [title], [description], [quantity], [owner_id], [id]) VALUES (4, CAST(12345 AS Decimal(18, 0)), N'thing333', N'cup3', 200, 4, 8)
INSERT [dbo].[product] ([category], [price], [title], [description], [quantity], [owner_id], [id]) VALUES (5, CAST(125 AS Decimal(18, 0)), N'motorcycle', N'125 motorcycle', 1, 5, 9)
INSERT [dbo].[product] ([category], [price], [title], [description], [quantity], [owner_id], [id]) VALUES (5, CAST(125 AS Decimal(18, 0)), N'motorTricyclevrooooom', N'like a motorcycle but with 3 ', 5, 2, 1002)
INSERT [dbo].[product] ([category], [price], [title], [description], [quantity], [owner_id], [id]) VALUES (2, CAST(123 AS Decimal(18, 0)), N'', N'hi', 4, 4, 2006)
SET IDENTITY_INSERT [dbo].[product] OFF
SET IDENTITY_INSERT [dbo].[product_types] ON 

INSERT [dbo].[product_types] ([category], [id]) VALUES (N'Bicycle', 1)
INSERT [dbo].[product_types] ([category], [id]) VALUES (N'Airplanes', 2)
INSERT [dbo].[product_types] ([category], [id]) VALUES (N'Computers', 3)
INSERT [dbo].[product_types] ([category], [id]) VALUES (N'Drinks', 4)
INSERT [dbo].[product_types] ([category], [id]) VALUES (N'Chairs', 5)
INSERT [dbo].[product_types] ([category], [id]) VALUES (N'Blenders', 6)
INSERT [dbo].[product_types] ([category], [id]) VALUES (N'Blankets', 8)
INSERT [dbo].[product_types] ([category], [id]) VALUES (N'yo-yo', 1013)
SET IDENTITY_INSERT [dbo].[product_types] OFF
SET IDENTITY_INSERT [dbo].[training_programs] ON 

INSERT [dbo].[training_programs] ([start_date], [end_date], [max_attendees], [id], [title]) VALUES (CAST(N'2018-02-01T00:00:00.000' AS DateTime), CAST(N'2018-03-02T00:00:00.000' AS DateTime), 5, 1, N'OnBoarding')
INSERT [dbo].[training_programs] ([start_date], [end_date], [max_attendees], [id], [title]) VALUES (CAST(N'2017-04-02T00:00:00.000' AS DateTime), CAST(N'2017-04-27T00:00:00.000' AS DateTime), 20, 2, N'Sales Force')
INSERT [dbo].[training_programs] ([start_date], [end_date], [max_attendees], [id], [title]) VALUES (CAST(N'2018-03-03T00:00:00.000' AS DateTime), CAST(N'2018-04-04T00:00:00.000' AS DateTime), 40, 3, N'Sexual Harrassment')
INSERT [dbo].[training_programs] ([start_date], [end_date], [max_attendees], [id], [title]) VALUES (CAST(N'2014-01-02T00:00:00.000' AS DateTime), CAST(N'2014-02-01T00:00:00.000' AS DateTime), 2, 4, N'Compliance Training')
INSERT [dbo].[training_programs] ([start_date], [end_date], [max_attendees], [id], [title]) VALUES (CAST(N'2005-09-02T00:00:00.000' AS DateTime), CAST(N'2005-09-05T00:00:00.000' AS DateTime), 10, 5, N'Team Building')
INSERT [dbo].[training_programs] ([start_date], [end_date], [max_attendees], [id], [title]) VALUES (CAST(N'2015-06-02T00:00:00.000' AS DateTime), CAST(N'2015-06-07T00:00:00.000' AS DateTime), 5, 6, N'Project Management')
INSERT [dbo].[training_programs] ([start_date], [end_date], [max_attendees], [id], [title]) VALUES (CAST(N'2004-09-03T00:00:00.000' AS DateTime), CAST(N'2009-10-01T00:00:00.000' AS DateTime), 12, 7, N'6Sigma')
INSERT [dbo].[training_programs] ([start_date], [end_date], [max_attendees], [id], [title]) VALUES (CAST(N'2018-02-01T00:00:00.000' AS DateTime), CAST(N'2018-03-02T00:00:00.000' AS DateTime), 35, 1006, N'Personal Development')
INSERT [dbo].[training_programs] ([start_date], [end_date], [max_attendees], [id], [title]) VALUES (CAST(N'2019-02-01T00:00:00.000' AS DateTime), CAST(N'2019-03-01T00:00:00.000' AS DateTime), 20, 1007, N'Competency Development')
SET IDENTITY_INSERT [dbo].[training_programs] OFF
ALTER TABLE [dbo].[computer]  WITH CHECK ADD  CONSTRAINT [FK__computer__employ__160F4887] FOREIGN KEY([employee_id])
REFERENCES [dbo].[employee] ([id])
GO
ALTER TABLE [dbo].[computer] CHECK CONSTRAINT [FK__computer__employ__160F4887]
GO
ALTER TABLE [dbo].[department]  WITH CHECK ADD  CONSTRAINT [FK__departmen__super__0C85DE4D] FOREIGN KEY([supervisor_id])
REFERENCES [dbo].[employee] ([id])
GO
ALTER TABLE [dbo].[department] CHECK CONSTRAINT [FK__departmen__super__0C85DE4D]
GO
ALTER TABLE [dbo].[employee]  WITH CHECK ADD  CONSTRAINT [FK__employee__depart__0B91BA14] FOREIGN KEY([department_id])
REFERENCES [dbo].[department] ([id])
GO
ALTER TABLE [dbo].[employee] CHECK CONSTRAINT [FK__employee__depart__0B91BA14]
GO
ALTER TABLE [dbo].[employee_training_program_pair]  WITH CHECK ADD  CONSTRAINT [FK__employee___emplo__0D7A0286] FOREIGN KEY([employee_id])
REFERENCES [dbo].[employee] ([id])
GO
ALTER TABLE [dbo].[employee_training_program_pair] CHECK CONSTRAINT [FK__employee___emplo__0D7A0286]
GO
ALTER TABLE [dbo].[employee_training_program_pair]  WITH CHECK ADD  CONSTRAINT [FK__employee___train__0E6E26BF] FOREIGN KEY([training_program_id])
REFERENCES [dbo].[training_programs] ([id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[employee_training_program_pair] CHECK CONSTRAINT [FK__employee___train__0E6E26BF]
GO
ALTER TABLE [dbo].[order_product_pair]  WITH CHECK ADD  CONSTRAINT [FK__order_pro__order__123EB7A3] FOREIGN KEY([order_id])
REFERENCES [dbo].[orders] ([id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[order_product_pair] CHECK CONSTRAINT [FK__order_pro__order__123EB7A3]
GO
ALTER TABLE [dbo].[order_product_pair]  WITH CHECK ADD  CONSTRAINT [FK__order_pro__produ__1332DBDC] FOREIGN KEY([product_id])
REFERENCES [dbo].[product] ([id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[order_product_pair] CHECK CONSTRAINT [FK__order_pro__produ__1332DBDC]
GO
ALTER TABLE [dbo].[orders]  WITH CHECK ADD  CONSTRAINT [FK__orders__customer__114A936A] FOREIGN KEY([customer_id])
REFERENCES [dbo].[customer] ([id])
GO
ALTER TABLE [dbo].[orders] CHECK CONSTRAINT [FK__orders__customer__114A936A]
GO
ALTER TABLE [dbo].[orders]  WITH CHECK ADD  CONSTRAINT [FK__orders__payment___151B244E] FOREIGN KEY([payment_type_id])
REFERENCES [dbo].[payment_type] ([id])
GO
ALTER TABLE [dbo].[orders] CHECK CONSTRAINT [FK__orders__payment___151B244E]
GO
ALTER TABLE [dbo].[payment_type]  WITH CHECK ADD  CONSTRAINT [FK__payment_t__custo__10566F31] FOREIGN KEY([customer_id])
REFERENCES [dbo].[customer] ([id])
GO
ALTER TABLE [dbo].[payment_type] CHECK CONSTRAINT [FK__payment_t__custo__10566F31]
GO
ALTER TABLE [dbo].[product]  WITH CHECK ADD  CONSTRAINT [FK__product__categor__0F624AF8] FOREIGN KEY([category])
REFERENCES [dbo].[product_types] ([id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[product] CHECK CONSTRAINT [FK__product__categor__0F624AF8]
GO
ALTER TABLE [dbo].[product]  WITH CHECK ADD  CONSTRAINT [FK__product__owner_i__14270015] FOREIGN KEY([owner_id])
REFERENCES [dbo].[customer] ([id])
GO
ALTER TABLE [dbo].[product] CHECK CONSTRAINT [FK__product__owner_i__14270015]
GO
USE [master]
GO
ALTER DATABASE [Bangazon] SET  READ_WRITE 
GO
