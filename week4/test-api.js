import fetch from 'node-fetch';

const BASE_URL = 'http://localhost:4000';
let userId = null;

// Test colors for console output
const colors = {
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    reset: '\x1b[0m'
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

async function testAPI() {
    log('\n🧪 Testing Week 4 API Endpoints\n', 'blue');
    
    try {
        // Test 1: Create a new user
        log('1. Testing POST /api/users - Create User', 'yellow');
        const timestamp = Date.now();
        const createUserData = {
            name: "Kamran Ali",
            email: `kamran${timestamp}@example.com`,
            password: "password123"
        };
        
        const createResponse = await fetch(`${BASE_URL}/api/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(createUserData)
        });
        
        if (createResponse.status === 201) {
            const user = await createResponse.json();
            userId = user._id;
            log(`✅ User created successfully! ID: ${userId}`, 'green');
        } else {
            const error = await createResponse.json();
            log(`❌ Failed to create user: ${error.error}`, 'red');
        }

        // Test 2: Get all users
        log('\n2. Testing GET /api/users - Get All Users', 'yellow');
        const getResponse = await fetch(`${BASE_URL}/api/users`);
        
        if (getResponse.status === 200) {
            const users = await getResponse.json();
            log(`✅ Retrieved ${users.length} users`, 'green');
            console.log('Users:', users);
        } else {
            log(`❌ Failed to get users: ${getResponse.status}`, 'red');
        }

        // Test 3: User registration with validation
        log('\n3. Testing POST /api/users/register - User Registration', 'yellow');
        const registerData = {
            name: "Test User",
            email: `test${timestamp}@example.com`,
            password: "securepass123"
        };
        
        const registerResponse = await fetch(`${BASE_URL}/api/users/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(registerData)
        });
        
        if (registerResponse.status === 201) {
            const result = await registerResponse.json();
            log(`✅ Registration successful: ${result.message}`, 'green');
        } else {
            const error = await registerResponse.json();
            log(`❌ Registration failed: ${error.error}`, 'red');
        }

        // Test 4: Update user (if user was created)
        if (userId) {
            log('\n4. Testing PUT /api/users/:id - Update User', 'yellow');
            const updateData = {
                name: "Kamran Ali Updated",
                email: "kamran.updated@gmail.com"
            };
            
            const updateResponse = await fetch(`${BASE_URL}/api/users/${userId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updateData)
            });
            
            if (updateResponse.status === 200) {
                const updatedUser = await updateResponse.json();
                log(`✅ User updated successfully!`, 'green');
                console.log('Updated user:', updatedUser);
            } else {
                const error = await updateResponse.json();
                log(`❌ Failed to update user: ${error.error}`, 'red');
            }
        }

        // Test 5: Delete user (if user was created)
        if (userId) {
            log('\n5. Testing DELETE /api/users/:id - Delete User', 'yellow');
            const deleteResponse = await fetch(`${BASE_URL}/api/users/${userId}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            });
            
            if (deleteResponse.status === 200) {
                const result = await deleteResponse.json();
                log(`✅ User deleted successfully: ${result.message}`, 'green');
            } else {
                const error = await deleteResponse.json();
                log(`❌ Failed to delete user: ${error.error}`, 'red');
            }
        }

        // Test 6: Validation errors
        log('\n6. Testing Validation Errors', 'yellow');
        
        // Test invalid email
        log('   Testing invalid email format...', 'yellow');
        const invalidEmailData = {
            name: "Test User",
            email: "invalid-email",
            password: "password123"
        };
        
        const invalidEmailResponse = await fetch(`${BASE_URL}/api/users/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(invalidEmailData)
        });
        
        if (invalidEmailResponse.status === 400) {
            const error = await invalidEmailResponse.json();
            log(`✅ Invalid email validation working: ${error.error}`, 'green');
        } else {
            log(`❌ Invalid email validation failed`, 'red');
        }

        // Test short password
        log('   Testing short password...', 'yellow');
        const shortPasswordData = {
            name: "Test User",
            email: `shortpass${timestamp}@example.com`,
            password: "123"
        };
        
        const shortPasswordResponse = await fetch(`${BASE_URL}/api/users/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(shortPasswordData)
        });
        
        if (shortPasswordResponse.status === 400) {
            const error = await shortPasswordResponse.json();
            log(`✅ Short password validation working: ${error.error}`, 'green');
        } else {
            log(`❌ Short password validation failed`, 'red');
        }

        // Test missing fields
        log('   Testing missing fields...', 'yellow');
        const missingFieldsData = {
            name: "Test User"
        };
        
        const missingFieldsResponse = await fetch(`${BASE_URL}/api/users/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(missingFieldsData)
        });
        
        if (missingFieldsResponse.status === 400) {
            const error = await missingFieldsResponse.json();
            log(`✅ Missing fields validation working: ${error.error}`, 'green');
        } else {
            log(`❌ Missing fields validation failed`, 'red');
        }

        log('\n🎉 All tests completed!', 'blue');
        
    } catch (error) {
        log(`\n❌ Test failed with error: ${error.message}`, 'red');
        log('Make sure your server is running on http://localhost:4000', 'yellow');
    }
}

// Run the tests
testAPI(); 