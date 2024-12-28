import { Restaurant } from 'src/restaurant/restaurant.entity';
import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('decimal')
    totalAmount: number;

    @Column({ type: 'enum', enum: ['placed', 'paid', 'inProgress', 'outForDelivery', 'delivered'] })
    status: string;

    @Column('json')
    cartItems: { menuItemId: string, quantity: number, name: string }[];

    @Column('json')
    deliveryDetails: {
        email: string;
        name: string;
        addressLine1: string;
        city: string;
    };

    @CreateDateColumn({ type: 'timestamp', nullable: true })
    created_at: Date | null;

    @UpdateDateColumn({ type: 'timestamp', nullable: true })
    updated_at: Date | null;

    @DeleteDateColumn({ type: 'timestamp', nullable: true })
    deleted_at: Date | null;

    // Relationships
    @ManyToOne(() => Restaurant, (restaurant) => restaurant.orders)
    restaurant: Restaurant;

    @ManyToOne(() => User, (user) => user.orders)
    user: User;
}
