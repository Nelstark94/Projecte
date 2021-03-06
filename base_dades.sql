USE [master]
GO
/****** Object:  Database [gorthegames]    Script Date: 03/26/2015 12:46:04 ******/
CREATE DATABASE [gorthegames] ON  PRIMARY 
( NAME = N'gorthegames', FILENAME = N'c:\Program Files\Microsoft SQL Server\MSSQL10_50.SQLSERVER2008\MSSQL\DATA\gorthegames.mdf' , SIZE = 3072KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'gorthegames_log', FILENAME = N'c:\Program Files\Microsoft SQL Server\MSSQL10_50.SQLSERVER2008\MSSQL\DATA\gorthegames_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [gorthegames] SET COMPATIBILITY_LEVEL = 100
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [gorthegames].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [gorthegames] SET ANSI_NULL_DEFAULT OFF
GO
ALTER DATABASE [gorthegames] SET ANSI_NULLS OFF
GO
ALTER DATABASE [gorthegames] SET ANSI_PADDING OFF
GO
ALTER DATABASE [gorthegames] SET ANSI_WARNINGS OFF
GO
ALTER DATABASE [gorthegames] SET ARITHABORT OFF
GO
ALTER DATABASE [gorthegames] SET AUTO_CLOSE OFF
GO
ALTER DATABASE [gorthegames] SET AUTO_CREATE_STATISTICS ON
GO
ALTER DATABASE [gorthegames] SET AUTO_SHRINK OFF
GO
ALTER DATABASE [gorthegames] SET AUTO_UPDATE_STATISTICS ON
GO
ALTER DATABASE [gorthegames] SET CURSOR_CLOSE_ON_COMMIT OFF
GO
ALTER DATABASE [gorthegames] SET CURSOR_DEFAULT  GLOBAL
GO
ALTER DATABASE [gorthegames] SET CONCAT_NULL_YIELDS_NULL OFF
GO
ALTER DATABASE [gorthegames] SET NUMERIC_ROUNDABORT OFF
GO
ALTER DATABASE [gorthegames] SET QUOTED_IDENTIFIER OFF
GO
ALTER DATABASE [gorthegames] SET RECURSIVE_TRIGGERS OFF
GO
ALTER DATABASE [gorthegames] SET  DISABLE_BROKER
GO
ALTER DATABASE [gorthegames] SET AUTO_UPDATE_STATISTICS_ASYNC OFF
GO
ALTER DATABASE [gorthegames] SET DATE_CORRELATION_OPTIMIZATION OFF
GO
ALTER DATABASE [gorthegames] SET TRUSTWORTHY OFF
GO
ALTER DATABASE [gorthegames] SET ALLOW_SNAPSHOT_ISOLATION OFF
GO
ALTER DATABASE [gorthegames] SET PARAMETERIZATION SIMPLE
GO
ALTER DATABASE [gorthegames] SET READ_COMMITTED_SNAPSHOT OFF
GO
ALTER DATABASE [gorthegames] SET HONOR_BROKER_PRIORITY OFF
GO
ALTER DATABASE [gorthegames] SET  READ_WRITE
GO
ALTER DATABASE [gorthegames] SET RECOVERY SIMPLE
GO
ALTER DATABASE [gorthegames] SET  MULTI_USER
GO
ALTER DATABASE [gorthegames] SET PAGE_VERIFY CHECKSUM
GO
ALTER DATABASE [gorthegames] SET DB_CHAINING OFF
GO
USE [gorthegames]
GO
/****** Object:  Table [dbo].[Joc]    Script Date: 03/26/2015 12:46:05 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Joc](
	[Id] [varchar](5) NOT NULL,
	[Nom] [varchar](15) NOT NULL,
	[Valoracio] [int] NULL,
	[Genere] [varchar](15) NOT NULL,
 CONSTRAINT [PK_Joc] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Jugador]    Script Date: 03/26/2015 12:46:05 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Jugador](
	[Id] [varchar](5) NOT NULL,
	[Nom] [varchar](15) NOT NULL,
	[Cognom] [varchar](15) NOT NULL,
	[Nik] [varchar](15) NOT NULL,
	[Correu_electronic] [varchar](20) NOT NULL,
	[Data_Naix] [date] NOT NULL,
	[Direccio] [varchar](50) NOT NULL,
	[Puntuacio] [int] NULL,
 CONSTRAINT [PK_Jugador] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[JocJugador]    Script Date: 03/26/2015 12:46:05 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[JocJugador](
	[Id_Joc] [varchar](5) NOT NULL,
	[Id_Jugador] [varchar](5) NOT NULL,
 CONSTRAINT [PK_JocJugador] PRIMARY KEY CLUSTERED 
(
	[Id_Joc] ASC,
	[Id_Jugador] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Guia]    Script Date: 03/26/2015 12:46:05 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Guia](
	[id] [varchar](5) NOT NULL,
	[nom] [varchar](20) NOT NULL,
	[valoracio] [int] NULL,
	[id_joc] [varchar](5) NOT NULL,
 CONSTRAINT [PK_guia2] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  ForeignKey [FK_JocJugador_Joc]    Script Date: 03/26/2015 12:46:05 ******/
ALTER TABLE [dbo].[JocJugador]  WITH CHECK ADD  CONSTRAINT [FK_JocJugador_Joc] FOREIGN KEY([Id_Joc])
REFERENCES [dbo].[Joc] ([Id])
GO
ALTER TABLE [dbo].[JocJugador] CHECK CONSTRAINT [FK_JocJugador_Joc]
GO
/****** Object:  ForeignKey [FK_JocJugador_Jugador]    Script Date: 03/26/2015 12:46:05 ******/
ALTER TABLE [dbo].[JocJugador]  WITH CHECK ADD  CONSTRAINT [FK_JocJugador_Jugador] FOREIGN KEY([Id_Jugador])
REFERENCES [dbo].[Jugador] ([Id])
GO
ALTER TABLE [dbo].[JocJugador] CHECK CONSTRAINT [FK_JocJugador_Jugador]
GO
/****** Object:  ForeignKey [FK_guia2_Joc]    Script Date: 03/26/2015 12:46:05 ******/
ALTER TABLE [dbo].[Guia]  WITH CHECK ADD  CONSTRAINT [FK_guia2_Joc] FOREIGN KEY([id_joc])
REFERENCES [dbo].[Joc] ([Id])
GO
ALTER TABLE [dbo].[Guia] CHECK CONSTRAINT [FK_guia2_Joc]
GO
