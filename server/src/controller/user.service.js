import { secret } from 'config.json';
import { sign } from 'jsonwebtoken';
import { compareSync, hashSync } from 'bcryptjs';
import { Student } from '../models/student.model';
const User = Student;

export default {
    authenticate,
    getAll,
    getById,
    create,
    update,
    LogIn,
    delete: _delete
};


async function authenticate ({ email, password }) {
    const user = await User.findOne ({ email });
    if (user && compareSync(password, user.hash)) {
        const token = sign({ sub: user.id }, secret, { expiresIn: '7d' });
        return {
            ...user.toJSON(),
            token
        };
    }
}


async function getAll() {
    return await User.find();
}

async function getById(id) {
    return await User.findById(id);
}

async function create(userParam) {
    // validate
    if (await User.findOne({ email: userParam.email })) {
        throw 'Email "' + userParam.email + '" is already taken';
    }

    const user = new User(userParam);

    // hash password
    if (userParam.password) {
        user.hash = hashSync(userParam.password, 10);
    }

    // save user
    await user.save();
}

async function update(id, userParam) {
    const user = await User.findById(id);

    // validate
    if (!user) throw 'User not found';
    if (user.email !== userParam.email && await User.findOne({ email: userParam.email })) {
        throw 'Email "' + userParam.email + '" is already taken';
    }

    // hash password if it was entered
    if (userParam.password) {
        userParam.hash = hashSync(userParam.password, 10);
    }

    // copy userParam properties to user
    Object.assign(user, userParam);

    await user.save();
}


async function LogIn(id, userParam){
    const user = await User.findById(id);
    // validate
    if (!user) throw 'User not found';
    if (user.email !== userParam.email  || user.password != userParam.password) {
        throw ' Email "' + userParam.email + '" is not exist';
    }
    return authenticate (userParam.email, userParam.password);
}

async function _delete(id) {
    await User.findByIdAndRemove(id);
}
