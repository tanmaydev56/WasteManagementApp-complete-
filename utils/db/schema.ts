import { integer,varchar,pgTable,serial,text,timestamp,jsonb,boolean } from "drizzle-orm/pg-core";

// user
export const  Users = pgTable('users', {
    id: serial('id').primaryKey(),
    email: varchar('email',{length:255}).notNull().unique(),
    name: varchar('name',{length:255}).notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    
})


// report
// report
// report
export const  Reports = pgTable('reports', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').notNull().references(()=>Users.id),
    // isme we created a relation ship between report and user table taking user id as a foreign key
    // har user ki report diffrent 
  location: varchar('location',{length:255}).notNull(),
  wasteType: varchar('waste_type',{length:255}).notNull(),
  amount: varchar('amount',{length:255}).notNull(),
  imageUrl: varchar('image_url',{length:255}),
  verificationResult: jsonb('verification_result'),
  status: varchar('status',{length:255}).notNull().default('pending'),
  createdAt: timestamp('created_at').notNull().defaultNow(), 
  collectedId: integer('collector_id').references(()=>Users.id),
})

// rewards
export const Rewards = pgTable('rewards', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').notNull().references(() => Users.id),
    points: integer('points').notNull(),
    rewardType: varchar('reward_type', { length: 255 }).notNull(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
    isAvailable: boolean('is_available').notNull().default(true),
    description: text('description'),
    name: varchar('name', { length: 255 }).notNull(),
    collectionInfo: varchar('collection_info').notNull(),
    level: integer('level').notNull(), // Add this line
    createdAt: timestamp('created_at').notNull().defaultNow(),
  })

// collected Waste
export const  CollectedWaste = pgTable('collected_waste', {
    id: serial('id').primaryKey(),
    reportId: integer('report_id').notNull().references(()=>Reports.id),
    collectorId: integer('collector_id').notNull().references(()=>Users.id),
    collectionDate: timestamp('collection_date').notNull(),
    status: varchar('status',{length:255}).notNull().default('collected'),
})

// Notification
export const  Notifications = pgTable('notifications', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').notNull().references(()=>Users.id),
    message: varchar('message',{length:255}).notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    isRead: boolean('is_read').notNull().default(false),
    type: varchar('type',{length:50}).notNull(),

});

// Transactions
export const  Transactions = pgTable('transactions', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').notNull().references(()=>Users.id),
  type: varchar('type',{length:25}).notNull(),
    amount: integer('amount').notNull(),
   description: varchar('description',{length:255}).notNull(),
    date: timestamp('date').notNull().defaultNow(),
});