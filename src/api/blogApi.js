import { 
  mockPosts, 
  mockUsers, 
  mockComments, 
  simulateNetworkDelay, 
  simulateError 
} from '../mocks';

// Simular API con datos locales
export const getPosts = async () => {
  try {
    // Simular delay de red
    await simulateNetworkDelay(800);
    
    // Simular error aleatorio (20% de probabilidad)
    simulateError(0.2);
    
    // Retornar datos simulados
    return {
      data: mockPosts,
      status: 200,
      statusText: 'OK'
    };
  } catch (error) {
    console.error("Error al obtener posts:", error);
    throw error;
  }
};

// Obtener un post por ID
export const getPostById = async (id) => {
  try {
    // Simular delay de red
    await simulateNetworkDelay(600);
    
    // Simular error aleatorio
    simulateError(0.2);
    
    // Buscar post por ID
    const post = mockPosts.find(p => p.id === parseInt(id));
    
    if (!post) {
      throw new Error(`Post con ID ${id} no encontrado`);
    }
    
    return {
      data: post,
      status: 200,
      statusText: 'OK'
    };
  } catch (error) {
    console.error(`Error al obtener post ${id}:`, error);
    throw error;
  }
};

// Obtener comentarios de un post
export const getPostComments = async (postId) => {
  try {
    // Simular delay de red
    await simulateNetworkDelay(500);
    
    // Simular error aleatorio
    simulateError(0.2);
    
    // Filtrar comentarios por postId
    const comments = mockComments.filter(c => c.postId === parseInt(postId));
    
    return {
      data: comments,
      status: 200,
      statusText: 'OK'
    };
  } catch (error) {
    console.error(`Error al obtener comentarios del post ${postId}:`, error);
    throw error;
  }
};

// Obtener usuario por ID
export const getUserById = async (userId) => {
  try {
    // Simular delay de red
    await simulateNetworkDelay(400);
    
    // Simular error aleatorio
    simulateError(0.2);
    
    // Buscar usuario por ID
    const user = mockUsers.find(u => u.id === parseInt(userId));
    
    if (!user) {
      throw new Error(`Usuario con ID ${userId} no encontrado`);
    }
    
    return {
      data: user,
      status: 200,
      statusText: 'OK'
    };
  } catch (error) {
    console.error(`Error al obtener usuario ${userId}:`, error);
    throw error;
  }
};


