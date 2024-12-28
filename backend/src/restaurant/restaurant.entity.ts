import { MenuItem } from 'src/menu-item/menu-item.entity';
import { Order } from 'src/order/order.entity';
import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class Restaurant {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    restaurantName: string;

    @Column({ length: 255 })
    city: string;

    @Column({ length: 255 })
    country: string;

    @Column('decimal')
    deliveryPrice: number;

    @Column('int')
    estimatedDeliveryTime: number;

    @Column('json')
    cuisines: string[];

    @Column({ length: 255 })
    imageUrl: string;

    @CreateDateColumn({ type: 'timestamp', nullable: true })
    created_at: Date | null;

    @UpdateDateColumn({ type: 'timestamp', nullable: true })
    updated_at: Date | null;

    @DeleteDateColumn({ type: 'timestamp', nullable: true })
    deleted_at: Date | null;

    // Relationships
    @ManyToOne(() => User, (user) => user.restaurants)
    user: User;

    @OneToMany(() => Order, (order) => order.restaurant)
    orders: Order[];

    @OneToMany(() => MenuItem, (menuItem) => menuItem.restaurant)
    menuItems: MenuItem[];
}
