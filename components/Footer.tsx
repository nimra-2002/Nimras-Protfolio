"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="mt-16 bg-secondary text-secondary-foreground border-t">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-lg font-semibold">
              <span className="inline-block h-3 w-3 rounded-full bg-primary" />
              <span>Nimra</span>
            </Link>
            <p className="mt-4 text-sm/6 text-muted-foreground">
              Frontend Developer crafting clean UIs with React, Next.js and Tailwind CSS.
            </p>
            <a href="mailto:hello@nimra.dev" className="mt-4 inline-block text-sm font-medium hover:underline">
              hello@nimra.dev
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link className="hover:text-foreground" href="/">Home</Link></li>
              <li><Link className="hover:text-foreground" href="/resume">Resume</Link></li>
              <li><Link className="hover:text-foreground" href="#projects">Projects</Link></li>
              <li><Link className="hover:text-foreground" href="#contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide">Services</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>UI/UX Design</li>
              <li>Web Development</li>
              <li>Responsive Design</li>
              <li>Dashboard & Admin UI</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide">Follow</h4>
            <div className="mt-4 flex items-center gap-3">
              <Link aria-label="Facebook" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link aria-label="Twitter" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link aria-label="Instagram" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link aria-label="LinkedIn" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <p>Karachi, Pakistan</p>
              <p>+92 300 0000000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-muted-foreground flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Nimra. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link className="hover:text-foreground" href="#">Terms & Conditions</Link>
            <Link className="hover:text-foreground" href="#">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


