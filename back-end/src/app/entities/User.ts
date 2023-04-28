import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn  } from 'typeorm';

@Entity('users')
class User {
    @PrimaryGeneratedColumn('increment')
    id: number; 

    @Column('varchar', {length: 225, nullable: false})
    name: string; 

    @Column('varchar', {length: 225, nullable: false})
    email: string; 

    @Column('varchar', {nullable: false})
    password: string; 


}
;
export default User