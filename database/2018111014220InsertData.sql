SET IDENTITY_INSERT [dbo].[computer] ON 
GO
INSERT [dbo].[computer] ([id], [purchase_date], [decommissioned], [employee_id], [in_use], [is_malfunctioning]) VALUES (1, CAST(N'2016-06-04T00:00:00.000' AS DateTime), NULL, 1, 1, 0)
GO
INSERT [dbo].[computer] ([id], [purchase_date], [decommissioned], [employee_id], [in_use], [is_malfunctioning]) VALUES (2, CAST(N'2017-07-12T00:00:00.000' AS DateTime), NULL, 2, 1, 0)
GO
INSERT [dbo].[computer] ([id], [purchase_date], [decommissioned], [employee_id], [in_use], [is_malfunctioning]) VALUES (3, CAST(N'2016-08-15T00:00:00.000' AS DateTime), NULL, 3, 1, 0)
GO
INSERT [dbo].[computer] ([id], [purchase_date], [decommissioned], [employee_id], [in_use], [is_malfunctioning]) VALUES (4, CAST(N'2018-09-19T00:00:00.000' AS DateTime), NULL, 4, 1, 0)
GO
INSERT [dbo].[computer] ([id], [purchase_date], [decommissioned], [employee_id], [in_use], [is_malfunctioning]) VALUES (5, CAST(N'2015-10-13T00:00:00.000' AS DateTime), NULL, 5, 1, 0)
GO
INSERT [dbo].[computer] ([id], [purchase_date], [decommissioned], [employee_id], [in_use], [is_malfunctioning]) VALUES (6, CAST(N'2016-03-11T00:00:00.000' AS DateTime), NULL, 6, 1, 0)
GO
INSERT [dbo].[computer] ([id], [purchase_date], [decommissioned], [employee_id], [in_use], [is_malfunctioning]) VALUES (7, CAST(N'2015-04-12T00:00:00.000' AS DateTime), NULL, 7, 1, 0)
GO
INSERT [dbo].[computer] ([id], [purchase_date], [decommissioned], [employee_id], [in_use], [is_malfunctioning]) VALUES (8, CAST(N'2017-03-12T00:00:00.000' AS DateTime), NULL, 8, 1, 0)
GO
INSERT [dbo].[computer] ([id], [purchase_date], [decommissioned], [employee_id], [in_use], [is_malfunctioning]) VALUES (9, CAST(N'2016-05-11T00:00:00.000' AS DateTime), NULL, 9, 1, 0)
GO
INSERT [dbo].[computer] ([id], [purchase_date], [decommissioned], [employee_id], [in_use], [is_malfunctioning]) VALUES (10, CAST(N'1945-06-29T00:00:00.000' AS DateTime), NULL, 10, 1, 0)
GO
INSERT [dbo].[computer] ([id], [purchase_date], [decommissioned], [employee_id], [in_use], [is_malfunctioning]) VALUES (11, CAST(N'2017-09-24T00:00:00.000' AS DateTime), CAST(N'2018-10-23T00:00:00.000' AS DateTime), NULL, 0, 1)
GO
INSERT [dbo].[computer] ([id], [purchase_date], [decommissioned], [employee_id], [in_use], [is_malfunctioning]) VALUES (12, CAST(N'2017-12-25T00:00:00.000' AS DateTime), CAST(N'2017-12-26T00:00:00.000' AS DateTime), NULL, 0, 1)
GO
SET IDENTITY_INSERT [dbo].[computer] OFF
GO
SET IDENTITY_INSERT [dbo].[customer] ON 
GO
INSERT [dbo].[customer] ([first_name], [last_name], [date_joined], [active], [id]) VALUES (N'Trashishsa', N'Maxwell', CAST(N'2010-11-23T00:00:00.000' AS DateTime), 1, 1)
GO
INSERT [dbo].[customer] ([first_name], [last_name], [date_joined], [active], [id]) VALUES (N'Sam', N'Poodles', CAST(N'1999-12-02T00:00:00.000' AS DateTime), 1, 2)
GO
INSERT [dbo].[customer] ([first_name], [last_name], [date_joined], [active], [id]) VALUES (N'Barry', N'Blues', CAST(N'2018-12-02T00:00:00.000' AS DateTime), 1, 3)
GO
INSERT [dbo].[customer] ([first_name], [last_name], [date_joined], [active], [id]) VALUES (N'Andy', N'Anderson', CAST(N'2017-03-03T00:00:00.000' AS DateTime), 1, 4)
GO
INSERT [dbo].[customer] ([first_name], [last_name], [date_joined], [active], [id]) VALUES (N'Alex', N'Azell', CAST(N'2017-03-20T00:00:00.000' AS DateTime), 1, 5)
GO
INSERT [dbo].[customer] ([first_name], [last_name], [date_joined], [active], [id]) VALUES (N'Lola', N'Lemon', CAST(N'2018-04-23T00:00:00.000' AS DateTime), 1, 6)
GO
INSERT [dbo].[customer] ([first_name], [last_name], [date_joined], [active], [id]) VALUES (N'Nathan', N'Newsome', CAST(N'2018-10-20T00:00:00.000' AS DateTime), 1, 7)
GO
INSERT [dbo].[customer] ([first_name], [last_name], [date_joined], [active], [id]) VALUES (N'Meli', N'Frank', CAST(N'2000-05-03T00:00:00.000' AS DateTime), 1, 8)
GO
INSERT [dbo].[customer] ([first_name], [last_name], [date_joined], [active], [id]) VALUES (N'Bob', N'Thebuilder', CAST(N'2000-07-03T00:00:00.000' AS DateTime), 0, 9)
GO
INSERT [dbo].[customer] ([first_name], [last_name], [date_joined], [active], [id]) VALUES (N'Natalie', N'Peters', CAST(N'2001-09-03T00:00:00.000' AS DateTime), 0, 10)
GO
INSERT [dbo].[customer] ([first_name], [last_name], [date_joined], [active], [id]) VALUES (N'William', N'Williams', CAST(N'2014-08-03T00:00:00.000' AS DateTime), 0, 11)
GO
INSERT [dbo].[customer] ([first_name], [last_name], [date_joined], [active], [id]) VALUES (N'Molly', N'Moped', CAST(N'2015-04-23T00:00:00.000' AS DateTime), 0, 12)
GO
INSERT [dbo].[customer] ([first_name], [last_name], [date_joined], [active], [id]) VALUES (N'Bruce', N'Wild', CAST(N'2018-04-02T00:00:00.000' AS DateTime), 0, 13)
GO
SET IDENTITY_INSERT [dbo].[customer] OFF
GO
SET IDENTITY_INSERT [dbo].[department] ON 
GO
INSERT [dbo].[department] ([name], [expense_budget], [supervisor_id], [id]) VALUES (N'HumanResources', 50000, NULL, 1)
GO
INSERT [dbo].[department] ([name], [expense_budget], [supervisor_id], [id]) VALUES (N'IT', 100000, NULL, 2)
GO
INSERT [dbo].[department] ([name], [expense_budget], [supervisor_id], [id]) VALUES (N'Sales', 150000, NULL, 3)
GO
INSERT [dbo].[department] ([name], [expense_budget], [supervisor_id], [id]) VALUES (N'HelpDesk', 25000, NULL, 4)
GO
INSERT [dbo].[department] ([name], [expense_budget], [supervisor_id], [id]) VALUES (N'Photography', 1000000, NULL, 5)
GO
SET IDENTITY_INSERT [dbo].[department] OFF
GO
SET IDENTITY_INSERT [dbo].[employee] ON 
GO
INSERT [dbo].[employee] ([name], [is_supervisor], [department_id], [id]) VALUES (N'Frank', 1, 1, 1)
GO
INSERT [dbo].[employee] ([name], [is_supervisor], [department_id], [id]) VALUES (N'James', 0, 2, 2)
GO
INSERT [dbo].[employee] ([name], [is_supervisor], [department_id], [id]) VALUES (N'Jimothy', 0, 3, 3)
GO
INSERT [dbo].[employee] ([name], [is_supervisor], [department_id], [id]) VALUES (N'Rotunda', 1, 4, 4)
GO
INSERT [dbo].[employee] ([name], [is_supervisor], [department_id], [id]) VALUES (N'Yamil', 1, 5, 5)
GO
INSERT [dbo].[employee] ([name], [is_supervisor], [department_id], [id]) VALUES (N'Michelle', 1, 2, 6)
GO
INSERT [dbo].[employee] ([name], [is_supervisor], [department_id], [id]) VALUES (N'Larrence', 1, 3, 7)
GO
INSERT [dbo].[employee] ([name], [is_supervisor], [department_id], [id]) VALUES (N'Matisyahu', 0, 4, 8)
GO
INSERT [dbo].[employee] ([name], [is_supervisor], [department_id], [id]) VALUES (N'Ed', 0, 1, 9)
GO
INSERT [dbo].[employee] ([name], [is_supervisor], [department_id], [id]) VALUES (N'Steve', 0, 5, 10)
GO
SET IDENTITY_INSERT [dbo].[employee] OFF
GO
SET IDENTITY_INSERT [dbo].[employee_training_program_pair] ON 
GO
INSERT [dbo].[employee_training_program_pair] ([training_program_id], [employee_id], [id]) VALUES (1, 1, 3)
GO
INSERT [dbo].[employee_training_program_pair] ([training_program_id], [employee_id], [id]) VALUES (2, 2, 4)
GO
INSERT [dbo].[employee_training_program_pair] ([training_program_id], [employee_id], [id]) VALUES (3, 3, 5)
GO
INSERT [dbo].[employee_training_program_pair] ([training_program_id], [employee_id], [id]) VALUES (4, 4, 6)
GO
INSERT [dbo].[employee_training_program_pair] ([training_program_id], [employee_id], [id]) VALUES (5, 5, 8)
GO
INSERT [dbo].[employee_training_program_pair] ([training_program_id], [employee_id], [id]) VALUES (6, 6, 9)
GO
INSERT [dbo].[employee_training_program_pair] ([training_program_id], [employee_id], [id]) VALUES (7, 7, 10)
GO
SET IDENTITY_INSERT [dbo].[employee_training_program_pair] OFF
GO
SET IDENTITY_INSERT [dbo].[order_product_pair] ON 
GO
INSERT [dbo].[order_product_pair] ([order_id], [product_id], [id]) VALUES (1, 5, 2)
GO
INSERT [dbo].[order_product_pair] ([order_id], [product_id], [id]) VALUES (2, 6, 3)
GO
INSERT [dbo].[order_product_pair] ([order_id], [product_id], [id]) VALUES (2, 7, 4)
GO
INSERT [dbo].[order_product_pair] ([order_id], [product_id], [id]) VALUES (3, 6, 5)
GO
INSERT [dbo].[order_product_pair] ([order_id], [product_id], [id]) VALUES (4, 9, 6)
GO
INSERT [dbo].[order_product_pair] ([order_id], [product_id], [id]) VALUES (4, 8, 7)
GO
INSERT [dbo].[order_product_pair] ([order_id], [product_id], [id]) VALUES (4, 7, 8)
GO
INSERT [dbo].[order_product_pair] ([order_id], [product_id], [id]) VALUES (5, 6, 9)
GO
INSERT [dbo].[order_product_pair] ([order_id], [product_id], [id]) VALUES (5, 9, 10)
GO
SET IDENTITY_INSERT [dbo].[order_product_pair] OFF
GO
SET IDENTITY_INSERT [dbo].[orders] ON 
GO
INSERT [dbo].[orders] ([customer_id], [order_status], [can_complete], [payment_type_id], [id]) VALUES (1, 1, 1, 1, 1)
GO
INSERT [dbo].[orders] ([customer_id], [order_status], [can_complete], [payment_type_id], [id]) VALUES (2, 0, 0, 2, 2)
GO
INSERT [dbo].[orders] ([customer_id], [order_status], [can_complete], [payment_type_id], [id]) VALUES (3, 1, 1, 3, 3)
GO
INSERT [dbo].[orders] ([customer_id], [order_status], [can_complete], [payment_type_id], [id]) VALUES (4, 0, 1, 4, 4)
GO
INSERT [dbo].[orders] ([customer_id], [order_status], [can_complete], [payment_type_id], [id]) VALUES (5, 1, 0, 5, 5)
GO
SET IDENTITY_INSERT [dbo].[orders] OFF
GO
SET IDENTITY_INSERT [dbo].[payment_type] ON 
GO
INSERT [dbo].[payment_type] ([account_number], [customer_id], [id]) VALUES (12345, 1, 1)
GO
INSERT [dbo].[payment_type] ([account_number], [customer_id], [id]) VALUES (23456, 2, 2)
GO
INSERT [dbo].[payment_type] ([account_number], [customer_id], [id]) VALUES (34567, 3, 3)
GO
INSERT [dbo].[payment_type] ([account_number], [customer_id], [id]) VALUES (45678, 4, 4)
GO
INSERT [dbo].[payment_type] ([account_number], [customer_id], [id]) VALUES (56789, 5, 5)
GO
SET IDENTITY_INSERT [dbo].[payment_type] OFF
GO
SET IDENTITY_INSERT [dbo].[product] ON 
GO
INSERT [dbo].[product] ([category], [price], [title], [description], [quantity], [owner_id], [id]) VALUES (1, CAST(2 AS Decimal(18, 0)), N'thing12', N'thing12 is great', 1, 1, 5)
GO
INSERT [dbo].[product] ([category], [price], [title], [description], [quantity], [owner_id], [id]) VALUES (2, CAST(45 AS Decimal(18, 0)), N'thing365', N'thing365 smells', 2, 2, 6)
GO
INSERT [dbo].[product] ([category], [price], [title], [description], [quantity], [owner_id], [id]) VALUES (3, CAST(10000 AS Decimal(18, 0)), N'computer1', N'computer1 is great', 5, 3, 7)
GO
INSERT [dbo].[product] ([category], [price], [title], [description], [quantity], [owner_id], [id]) VALUES (4, CAST(12345 AS Decimal(18, 0)), N'thing333', N'cup3', 189, 4, 8)
GO
INSERT [dbo].[product] ([category], [price], [title], [description], [quantity], [owner_id], [id]) VALUES (5, CAST(125 AS Decimal(18, 0)), N'motorcycle', N'125 motorcycle', 1, 5, 9)
GO
SET IDENTITY_INSERT [dbo].[product] OFF
GO
INSERT [dbo].[product_types] ([category], [id]) VALUES (N'Bicycle', 1)
GO
INSERT [dbo].[product_types] ([category], [id]) VALUES (N'Airplanes', 2)
GO
INSERT [dbo].[product_types] ([category], [id]) VALUES (N'Computers', 3)
GO
INSERT [dbo].[product_types] ([category], [id]) VALUES (N'Drinks', 4)
GO
INSERT [dbo].[product_types] ([category], [id]) VALUES (N'Chairs', 5)
GO
SET IDENTITY_INSERT [dbo].[training_programs] ON 
GO
INSERT [dbo].[training_programs] ([start_date], [end_date], [max_attendees], [id]) VALUES (CAST(N'2018-02-01T00:00:00.000' AS DateTime), CAST(N'2018-03-02T00:00:00.000' AS DateTime), 5, 1)
GO
INSERT [dbo].[training_programs] ([start_date], [end_date], [max_attendees], [id]) VALUES (CAST(N'2017-04-02T00:00:00.000' AS DateTime), CAST(N'2017-04-27T00:00:00.000' AS DateTime), 20, 2)
GO
INSERT [dbo].[training_programs] ([start_date], [end_date], [max_attendees], [id]) VALUES (CAST(N'2018-03-03T00:00:00.000' AS DateTime), CAST(N'2018-04-04T00:00:00.000' AS DateTime), 40, 3)
GO
INSERT [dbo].[training_programs] ([start_date], [end_date], [max_attendees], [id]) VALUES (CAST(N'2014-01-02T00:00:00.000' AS DateTime), CAST(N'2014-02-01T00:00:00.000' AS DateTime), 2, 4)
GO
INSERT [dbo].[training_programs] ([start_date], [end_date], [max_attendees], [id]) VALUES (CAST(N'2005-09-02T00:00:00.000' AS DateTime), CAST(N'2005-09-05T00:00:00.000' AS DateTime), 10, 5)
GO
INSERT [dbo].[training_programs] ([start_date], [end_date], [max_attendees], [id]) VALUES (CAST(N'2015-06-02T00:00:00.000' AS DateTime), CAST(N'2015-06-07T00:00:00.000' AS DateTime), 5, 6)
GO
INSERT [dbo].[training_programs] ([start_date], [end_date], [max_attendees], [id]) VALUES (CAST(N'2004-09-03T00:00:00.000' AS DateTime), CAST(N'2009-10-01T00:00:00.000' AS DateTime), 12, 7)
GO
