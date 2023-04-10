package main

import (
	"fmt"
	"log"
	"os"

	"com.geophone.observer/config"
	"github.com/common-nighthawk/go-figure"
)

func ProgramInit(args *config.Args, conf *config.Config) error {
	figure.NewFigure(
		"G-Observer",
		"standard",
		true,
	).Print()
	fmt.Println()

	args.ReadFlags()
	if args.Version {
		PrintVersion()
		os.Exit(0)
	}

	log.Println("Program starting")
	err := conf.ReadConfig(args.Path)
	if err != nil {
		return err
	}

	return nil
}
