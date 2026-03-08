-- Create leads table
CREATE TABLE leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    company TEXT,
    service TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'new' NOT NULL
);
-- Create subscribers table
CREATE TABLE subscribers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    email TEXT UNIQUE NOT NULL
);
-- Setup Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;
-- Allow anonymous inserts to leads (so the contact form works)
CREATE POLICY "Allow public insert to leads" ON leads FOR
INSERT TO anon WITH CHECK (true);
-- Allow anonymous inserts to subscribers (so the newsletter works)
CREATE POLICY "Allow public insert to subscribers" ON subscribers FOR
INSERT TO anon WITH CHECK (true);
-- Allow authenticated admins to view/edit
CREATE POLICY "Allow authenticated full access to leads" ON leads FOR ALL TO authenticated USING (true);
CREATE POLICY "Allow authenticated full access to subscribers" ON subscribers FOR ALL TO authenticated USING (true);