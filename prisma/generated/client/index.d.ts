
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model NotificationToken
 * 
 */
export type NotificationToken = $Result.DefaultSelection<Prisma.$NotificationTokenPayload>
/**
 * Model Extinguisher
 * 
 */
export type Extinguisher = $Result.DefaultSelection<Prisma.$ExtinguisherPayload>
/**
 * Model FloorShape
 * 
 */
export type FloorShape = $Result.DefaultSelection<Prisma.$FloorShapePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Floor: {
  ground: 'ground',
  first: 'first'
};

export type Floor = (typeof Floor)[keyof typeof Floor]


export const ShapeType: {
  rect: 'rect',
  text: 'text'
};

export type ShapeType = (typeof ShapeType)[keyof typeof ShapeType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Floor = $Enums.Floor

export const Floor: typeof $Enums.Floor

export type ShapeType = $Enums.ShapeType

export const ShapeType: typeof $Enums.ShapeType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificationToken`: Exposes CRUD operations for the **NotificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationTokens
    * const notificationTokens = await prisma.notificationToken.findMany()
    * ```
    */
  get notificationToken(): Prisma.NotificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.extinguisher`: Exposes CRUD operations for the **Extinguisher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Extinguishers
    * const extinguishers = await prisma.extinguisher.findMany()
    * ```
    */
  get extinguisher(): Prisma.ExtinguisherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.floorShape`: Exposes CRUD operations for the **FloorShape** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FloorShapes
    * const floorShapes = await prisma.floorShape.findMany()
    * ```
    */
  get floorShape(): Prisma.FloorShapeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    NotificationToken: 'NotificationToken',
    Extinguisher: 'Extinguisher',
    FloorShape: 'FloorShape'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "notificationToken" | "extinguisher" | "floorShape"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      NotificationToken: {
        payload: Prisma.$NotificationTokenPayload<ExtArgs>
        fields: Prisma.NotificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTokenPayload>
          }
          findFirst: {
            args: Prisma.NotificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTokenPayload>
          }
          findMany: {
            args: Prisma.NotificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTokenPayload>[]
          }
          create: {
            args: Prisma.NotificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTokenPayload>
          }
          createMany: {
            args: Prisma.NotificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTokenPayload>[]
          }
          delete: {
            args: Prisma.NotificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTokenPayload>
          }
          update: {
            args: Prisma.NotificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.NotificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.NotificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTokenPayload>
          }
          aggregate: {
            args: Prisma.NotificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationToken>
          }
          groupBy: {
            args: Prisma.NotificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Extinguisher: {
        payload: Prisma.$ExtinguisherPayload<ExtArgs>
        fields: Prisma.ExtinguisherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExtinguisherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtinguisherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExtinguisherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtinguisherPayload>
          }
          findFirst: {
            args: Prisma.ExtinguisherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtinguisherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExtinguisherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtinguisherPayload>
          }
          findMany: {
            args: Prisma.ExtinguisherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtinguisherPayload>[]
          }
          create: {
            args: Prisma.ExtinguisherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtinguisherPayload>
          }
          createMany: {
            args: Prisma.ExtinguisherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExtinguisherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtinguisherPayload>[]
          }
          delete: {
            args: Prisma.ExtinguisherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtinguisherPayload>
          }
          update: {
            args: Prisma.ExtinguisherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtinguisherPayload>
          }
          deleteMany: {
            args: Prisma.ExtinguisherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExtinguisherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExtinguisherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtinguisherPayload>[]
          }
          upsert: {
            args: Prisma.ExtinguisherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtinguisherPayload>
          }
          aggregate: {
            args: Prisma.ExtinguisherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExtinguisher>
          }
          groupBy: {
            args: Prisma.ExtinguisherGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExtinguisherGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExtinguisherCountArgs<ExtArgs>
            result: $Utils.Optional<ExtinguisherCountAggregateOutputType> | number
          }
        }
      }
      FloorShape: {
        payload: Prisma.$FloorShapePayload<ExtArgs>
        fields: Prisma.FloorShapeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FloorShapeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorShapePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FloorShapeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorShapePayload>
          }
          findFirst: {
            args: Prisma.FloorShapeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorShapePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FloorShapeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorShapePayload>
          }
          findMany: {
            args: Prisma.FloorShapeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorShapePayload>[]
          }
          create: {
            args: Prisma.FloorShapeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorShapePayload>
          }
          createMany: {
            args: Prisma.FloorShapeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FloorShapeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorShapePayload>[]
          }
          delete: {
            args: Prisma.FloorShapeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorShapePayload>
          }
          update: {
            args: Prisma.FloorShapeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorShapePayload>
          }
          deleteMany: {
            args: Prisma.FloorShapeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FloorShapeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FloorShapeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorShapePayload>[]
          }
          upsert: {
            args: Prisma.FloorShapeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorShapePayload>
          }
          aggregate: {
            args: Prisma.FloorShapeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFloorShape>
          }
          groupBy: {
            args: Prisma.FloorShapeGroupByArgs<ExtArgs>
            result: $Utils.Optional<FloorShapeGroupByOutputType>[]
          }
          count: {
            args: Prisma.FloorShapeCountArgs<ExtArgs>
            result: $Utils.Optional<FloorShapeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    notificationToken?: NotificationTokenOmit
    extinguisher?: ExtinguisherOmit
    floorShape?: FloorShapeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    tokens: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | UserCountOutputTypeCountTokensArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationTokenWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    name: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    name: string | null
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tokens?: boolean | User$tokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "name" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | User$tokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tokens: Prisma.$NotificationTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      name: string | null
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tokens<T extends User$tokensArgs<ExtArgs> = {}>(args?: Subset<T, User$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.tokens
   */
  export type User$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationToken
     */
    select?: NotificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationToken
     */
    omit?: NotificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationTokenInclude<ExtArgs> | null
    where?: NotificationTokenWhereInput
    orderBy?: NotificationTokenOrderByWithRelationInput | NotificationTokenOrderByWithRelationInput[]
    cursor?: NotificationTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationTokenScalarFieldEnum | NotificationTokenScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model NotificationToken
   */

  export type AggregateNotificationToken = {
    _count: NotificationTokenCountAggregateOutputType | null
    _min: NotificationTokenMinAggregateOutputType | null
    _max: NotificationTokenMaxAggregateOutputType | null
  }

  export type NotificationTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type NotificationTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type NotificationTokenCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    createdAt: number
    _all: number
  }


  export type NotificationTokenMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    createdAt?: true
  }

  export type NotificationTokenMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    createdAt?: true
  }

  export type NotificationTokenCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationToken to aggregate.
     */
    where?: NotificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationTokens to fetch.
     */
    orderBy?: NotificationTokenOrderByWithRelationInput | NotificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationTokens
    **/
    _count?: true | NotificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationTokenMaxAggregateInputType
  }

  export type GetNotificationTokenAggregateType<T extends NotificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationToken[P]>
      : GetScalarType<T[P], AggregateNotificationToken[P]>
  }




  export type NotificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationTokenWhereInput
    orderBy?: NotificationTokenOrderByWithAggregationInput | NotificationTokenOrderByWithAggregationInput[]
    by: NotificationTokenScalarFieldEnum[] | NotificationTokenScalarFieldEnum
    having?: NotificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationTokenCountAggregateInputType | true
    _min?: NotificationTokenMinAggregateInputType
    _max?: NotificationTokenMaxAggregateInputType
  }

  export type NotificationTokenGroupByOutputType = {
    id: string
    token: string
    userId: string | null
    createdAt: Date
    _count: NotificationTokenCountAggregateOutputType | null
    _min: NotificationTokenMinAggregateOutputType | null
    _max: NotificationTokenMaxAggregateOutputType | null
  }

  type GetNotificationTokenGroupByPayload<T extends NotificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type NotificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | NotificationToken$userArgs<ExtArgs>
  }, ExtArgs["result"]["notificationToken"]>

  export type NotificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | NotificationToken$userArgs<ExtArgs>
  }, ExtArgs["result"]["notificationToken"]>

  export type NotificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | NotificationToken$userArgs<ExtArgs>
  }, ExtArgs["result"]["notificationToken"]>

  export type NotificationTokenSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type NotificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "userId" | "createdAt", ExtArgs["result"]["notificationToken"]>
  export type NotificationTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | NotificationToken$userArgs<ExtArgs>
  }
  export type NotificationTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | NotificationToken$userArgs<ExtArgs>
  }
  export type NotificationTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | NotificationToken$userArgs<ExtArgs>
  }

  export type $NotificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      userId: string | null
      createdAt: Date
    }, ExtArgs["result"]["notificationToken"]>
    composites: {}
  }

  type NotificationTokenGetPayload<S extends boolean | null | undefined | NotificationTokenDefaultArgs> = $Result.GetResult<Prisma.$NotificationTokenPayload, S>

  type NotificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationTokenCountAggregateInputType | true
    }

  export interface NotificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationToken'], meta: { name: 'NotificationToken' } }
    /**
     * Find zero or one NotificationToken that matches the filter.
     * @param {NotificationTokenFindUniqueArgs} args - Arguments to find a NotificationToken
     * @example
     * // Get one NotificationToken
     * const notificationToken = await prisma.notificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationTokenFindUniqueArgs>(args: SelectSubset<T, NotificationTokenFindUniqueArgs<ExtArgs>>): Prisma__NotificationTokenClient<$Result.GetResult<Prisma.$NotificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NotificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationTokenFindUniqueOrThrowArgs} args - Arguments to find a NotificationToken
     * @example
     * // Get one NotificationToken
     * const notificationToken = await prisma.notificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationTokenClient<$Result.GetResult<Prisma.$NotificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTokenFindFirstArgs} args - Arguments to find a NotificationToken
     * @example
     * // Get one NotificationToken
     * const notificationToken = await prisma.notificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationTokenFindFirstArgs>(args?: SelectSubset<T, NotificationTokenFindFirstArgs<ExtArgs>>): Prisma__NotificationTokenClient<$Result.GetResult<Prisma.$NotificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTokenFindFirstOrThrowArgs} args - Arguments to find a NotificationToken
     * @example
     * // Get one NotificationToken
     * const notificationToken = await prisma.notificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationTokenClient<$Result.GetResult<Prisma.$NotificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationTokens
     * const notificationTokens = await prisma.notificationToken.findMany()
     * 
     * // Get first 10 NotificationTokens
     * const notificationTokens = await prisma.notificationToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationTokenWithIdOnly = await prisma.notificationToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationTokenFindManyArgs>(args?: SelectSubset<T, NotificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NotificationToken.
     * @param {NotificationTokenCreateArgs} args - Arguments to create a NotificationToken.
     * @example
     * // Create one NotificationToken
     * const NotificationToken = await prisma.notificationToken.create({
     *   data: {
     *     // ... data to create a NotificationToken
     *   }
     * })
     * 
     */
    create<T extends NotificationTokenCreateArgs>(args: SelectSubset<T, NotificationTokenCreateArgs<ExtArgs>>): Prisma__NotificationTokenClient<$Result.GetResult<Prisma.$NotificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NotificationTokens.
     * @param {NotificationTokenCreateManyArgs} args - Arguments to create many NotificationTokens.
     * @example
     * // Create many NotificationTokens
     * const notificationToken = await prisma.notificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationTokenCreateManyArgs>(args?: SelectSubset<T, NotificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NotificationTokens and returns the data saved in the database.
     * @param {NotificationTokenCreateManyAndReturnArgs} args - Arguments to create many NotificationTokens.
     * @example
     * // Create many NotificationTokens
     * const notificationToken = await prisma.notificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NotificationTokens and only return the `id`
     * const notificationTokenWithIdOnly = await prisma.notificationToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NotificationToken.
     * @param {NotificationTokenDeleteArgs} args - Arguments to delete one NotificationToken.
     * @example
     * // Delete one NotificationToken
     * const NotificationToken = await prisma.notificationToken.delete({
     *   where: {
     *     // ... filter to delete one NotificationToken
     *   }
     * })
     * 
     */
    delete<T extends NotificationTokenDeleteArgs>(args: SelectSubset<T, NotificationTokenDeleteArgs<ExtArgs>>): Prisma__NotificationTokenClient<$Result.GetResult<Prisma.$NotificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NotificationToken.
     * @param {NotificationTokenUpdateArgs} args - Arguments to update one NotificationToken.
     * @example
     * // Update one NotificationToken
     * const notificationToken = await prisma.notificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationTokenUpdateArgs>(args: SelectSubset<T, NotificationTokenUpdateArgs<ExtArgs>>): Prisma__NotificationTokenClient<$Result.GetResult<Prisma.$NotificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NotificationTokens.
     * @param {NotificationTokenDeleteManyArgs} args - Arguments to filter NotificationTokens to delete.
     * @example
     * // Delete a few NotificationTokens
     * const { count } = await prisma.notificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationTokenDeleteManyArgs>(args?: SelectSubset<T, NotificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationTokens
     * const notificationToken = await prisma.notificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationTokenUpdateManyArgs>(args: SelectSubset<T, NotificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationTokens and returns the data updated in the database.
     * @param {NotificationTokenUpdateManyAndReturnArgs} args - Arguments to update many NotificationTokens.
     * @example
     * // Update many NotificationTokens
     * const notificationToken = await prisma.notificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NotificationTokens and only return the `id`
     * const notificationTokenWithIdOnly = await prisma.notificationToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NotificationToken.
     * @param {NotificationTokenUpsertArgs} args - Arguments to update or create a NotificationToken.
     * @example
     * // Update or create a NotificationToken
     * const notificationToken = await prisma.notificationToken.upsert({
     *   create: {
     *     // ... data to create a NotificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationToken we want to update
     *   }
     * })
     */
    upsert<T extends NotificationTokenUpsertArgs>(args: SelectSubset<T, NotificationTokenUpsertArgs<ExtArgs>>): Prisma__NotificationTokenClient<$Result.GetResult<Prisma.$NotificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NotificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTokenCountArgs} args - Arguments to filter NotificationTokens to count.
     * @example
     * // Count the number of NotificationTokens
     * const count = await prisma.notificationToken.count({
     *   where: {
     *     // ... the filter for the NotificationTokens we want to count
     *   }
     * })
    **/
    count<T extends NotificationTokenCountArgs>(
      args?: Subset<T, NotificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationTokenAggregateArgs>(args: Subset<T, NotificationTokenAggregateArgs>): Prisma.PrismaPromise<GetNotificationTokenAggregateType<T>>

    /**
     * Group by NotificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: NotificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationToken model
   */
  readonly fields: NotificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends NotificationToken$userArgs<ExtArgs> = {}>(args?: Subset<T, NotificationToken$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NotificationToken model
   */
  interface NotificationTokenFieldRefs {
    readonly id: FieldRef<"NotificationToken", 'String'>
    readonly token: FieldRef<"NotificationToken", 'String'>
    readonly userId: FieldRef<"NotificationToken", 'String'>
    readonly createdAt: FieldRef<"NotificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NotificationToken findUnique
   */
  export type NotificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationToken
     */
    select?: NotificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationToken
     */
    omit?: NotificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which NotificationToken to fetch.
     */
    where: NotificationTokenWhereUniqueInput
  }

  /**
   * NotificationToken findUniqueOrThrow
   */
  export type NotificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationToken
     */
    select?: NotificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationToken
     */
    omit?: NotificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which NotificationToken to fetch.
     */
    where: NotificationTokenWhereUniqueInput
  }

  /**
   * NotificationToken findFirst
   */
  export type NotificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationToken
     */
    select?: NotificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationToken
     */
    omit?: NotificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which NotificationToken to fetch.
     */
    where?: NotificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationTokens to fetch.
     */
    orderBy?: NotificationTokenOrderByWithRelationInput | NotificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationTokens.
     */
    cursor?: NotificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationTokens.
     */
    distinct?: NotificationTokenScalarFieldEnum | NotificationTokenScalarFieldEnum[]
  }

  /**
   * NotificationToken findFirstOrThrow
   */
  export type NotificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationToken
     */
    select?: NotificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationToken
     */
    omit?: NotificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which NotificationToken to fetch.
     */
    where?: NotificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationTokens to fetch.
     */
    orderBy?: NotificationTokenOrderByWithRelationInput | NotificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationTokens.
     */
    cursor?: NotificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationTokens.
     */
    distinct?: NotificationTokenScalarFieldEnum | NotificationTokenScalarFieldEnum[]
  }

  /**
   * NotificationToken findMany
   */
  export type NotificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationToken
     */
    select?: NotificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationToken
     */
    omit?: NotificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which NotificationTokens to fetch.
     */
    where?: NotificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationTokens to fetch.
     */
    orderBy?: NotificationTokenOrderByWithRelationInput | NotificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationTokens.
     */
    cursor?: NotificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationTokens.
     */
    skip?: number
    distinct?: NotificationTokenScalarFieldEnum | NotificationTokenScalarFieldEnum[]
  }

  /**
   * NotificationToken create
   */
  export type NotificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationToken
     */
    select?: NotificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationToken
     */
    omit?: NotificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a NotificationToken.
     */
    data: XOR<NotificationTokenCreateInput, NotificationTokenUncheckedCreateInput>
  }

  /**
   * NotificationToken createMany
   */
  export type NotificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationTokens.
     */
    data: NotificationTokenCreateManyInput | NotificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationToken createManyAndReturn
   */
  export type NotificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationToken
     */
    select?: NotificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationToken
     */
    omit?: NotificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many NotificationTokens.
     */
    data: NotificationTokenCreateManyInput | NotificationTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationToken update
   */
  export type NotificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationToken
     */
    select?: NotificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationToken
     */
    omit?: NotificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a NotificationToken.
     */
    data: XOR<NotificationTokenUpdateInput, NotificationTokenUncheckedUpdateInput>
    /**
     * Choose, which NotificationToken to update.
     */
    where: NotificationTokenWhereUniqueInput
  }

  /**
   * NotificationToken updateMany
   */
  export type NotificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationTokens.
     */
    data: XOR<NotificationTokenUpdateManyMutationInput, NotificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which NotificationTokens to update
     */
    where?: NotificationTokenWhereInput
    /**
     * Limit how many NotificationTokens to update.
     */
    limit?: number
  }

  /**
   * NotificationToken updateManyAndReturn
   */
  export type NotificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationToken
     */
    select?: NotificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationToken
     */
    omit?: NotificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update NotificationTokens.
     */
    data: XOR<NotificationTokenUpdateManyMutationInput, NotificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which NotificationTokens to update
     */
    where?: NotificationTokenWhereInput
    /**
     * Limit how many NotificationTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationToken upsert
   */
  export type NotificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationToken
     */
    select?: NotificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationToken
     */
    omit?: NotificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the NotificationToken to update in case it exists.
     */
    where: NotificationTokenWhereUniqueInput
    /**
     * In case the NotificationToken found by the `where` argument doesn't exist, create a new NotificationToken with this data.
     */
    create: XOR<NotificationTokenCreateInput, NotificationTokenUncheckedCreateInput>
    /**
     * In case the NotificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationTokenUpdateInput, NotificationTokenUncheckedUpdateInput>
  }

  /**
   * NotificationToken delete
   */
  export type NotificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationToken
     */
    select?: NotificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationToken
     */
    omit?: NotificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationTokenInclude<ExtArgs> | null
    /**
     * Filter which NotificationToken to delete.
     */
    where: NotificationTokenWhereUniqueInput
  }

  /**
   * NotificationToken deleteMany
   */
  export type NotificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationTokens to delete
     */
    where?: NotificationTokenWhereInput
    /**
     * Limit how many NotificationTokens to delete.
     */
    limit?: number
  }

  /**
   * NotificationToken.user
   */
  export type NotificationToken$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * NotificationToken without action
   */
  export type NotificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationToken
     */
    select?: NotificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationToken
     */
    omit?: NotificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationTokenInclude<ExtArgs> | null
  }


  /**
   * Model Extinguisher
   */

  export type AggregateExtinguisher = {
    _count: ExtinguisherCountAggregateOutputType | null
    _avg: ExtinguisherAvgAggregateOutputType | null
    _sum: ExtinguisherSumAggregateOutputType | null
    _min: ExtinguisherMinAggregateOutputType | null
    _max: ExtinguisherMaxAggregateOutputType | null
  }

  export type ExtinguisherAvgAggregateOutputType = {
    x: number | null
    y: number | null
  }

  export type ExtinguisherSumAggregateOutputType = {
    x: number | null
    y: number | null
  }

  export type ExtinguisherMinAggregateOutputType = {
    id: string | null
    location: string | null
    floor: $Enums.Floor | null
    x: number | null
    y: number | null
    chargeDate: Date | null
    expirationDate: Date | null
    lastInspection: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExtinguisherMaxAggregateOutputType = {
    id: string | null
    location: string | null
    floor: $Enums.Floor | null
    x: number | null
    y: number | null
    chargeDate: Date | null
    expirationDate: Date | null
    lastInspection: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExtinguisherCountAggregateOutputType = {
    id: number
    location: number
    floor: number
    x: number
    y: number
    chargeDate: number
    expirationDate: number
    lastInspection: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExtinguisherAvgAggregateInputType = {
    x?: true
    y?: true
  }

  export type ExtinguisherSumAggregateInputType = {
    x?: true
    y?: true
  }

  export type ExtinguisherMinAggregateInputType = {
    id?: true
    location?: true
    floor?: true
    x?: true
    y?: true
    chargeDate?: true
    expirationDate?: true
    lastInspection?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExtinguisherMaxAggregateInputType = {
    id?: true
    location?: true
    floor?: true
    x?: true
    y?: true
    chargeDate?: true
    expirationDate?: true
    lastInspection?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExtinguisherCountAggregateInputType = {
    id?: true
    location?: true
    floor?: true
    x?: true
    y?: true
    chargeDate?: true
    expirationDate?: true
    lastInspection?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExtinguisherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Extinguisher to aggregate.
     */
    where?: ExtinguisherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Extinguishers to fetch.
     */
    orderBy?: ExtinguisherOrderByWithRelationInput | ExtinguisherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExtinguisherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Extinguishers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Extinguishers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Extinguishers
    **/
    _count?: true | ExtinguisherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExtinguisherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExtinguisherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExtinguisherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExtinguisherMaxAggregateInputType
  }

  export type GetExtinguisherAggregateType<T extends ExtinguisherAggregateArgs> = {
        [P in keyof T & keyof AggregateExtinguisher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExtinguisher[P]>
      : GetScalarType<T[P], AggregateExtinguisher[P]>
  }




  export type ExtinguisherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExtinguisherWhereInput
    orderBy?: ExtinguisherOrderByWithAggregationInput | ExtinguisherOrderByWithAggregationInput[]
    by: ExtinguisherScalarFieldEnum[] | ExtinguisherScalarFieldEnum
    having?: ExtinguisherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExtinguisherCountAggregateInputType | true
    _avg?: ExtinguisherAvgAggregateInputType
    _sum?: ExtinguisherSumAggregateInputType
    _min?: ExtinguisherMinAggregateInputType
    _max?: ExtinguisherMaxAggregateInputType
  }

  export type ExtinguisherGroupByOutputType = {
    id: string
    location: string
    floor: $Enums.Floor
    x: number
    y: number
    chargeDate: Date
    expirationDate: Date
    lastInspection: Date | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: ExtinguisherCountAggregateOutputType | null
    _avg: ExtinguisherAvgAggregateOutputType | null
    _sum: ExtinguisherSumAggregateOutputType | null
    _min: ExtinguisherMinAggregateOutputType | null
    _max: ExtinguisherMaxAggregateOutputType | null
  }

  type GetExtinguisherGroupByPayload<T extends ExtinguisherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExtinguisherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExtinguisherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExtinguisherGroupByOutputType[P]>
            : GetScalarType<T[P], ExtinguisherGroupByOutputType[P]>
        }
      >
    >


  export type ExtinguisherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    location?: boolean
    floor?: boolean
    x?: boolean
    y?: boolean
    chargeDate?: boolean
    expirationDate?: boolean
    lastInspection?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["extinguisher"]>

  export type ExtinguisherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    location?: boolean
    floor?: boolean
    x?: boolean
    y?: boolean
    chargeDate?: boolean
    expirationDate?: boolean
    lastInspection?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["extinguisher"]>

  export type ExtinguisherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    location?: boolean
    floor?: boolean
    x?: boolean
    y?: boolean
    chargeDate?: boolean
    expirationDate?: boolean
    lastInspection?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["extinguisher"]>

  export type ExtinguisherSelectScalar = {
    id?: boolean
    location?: boolean
    floor?: boolean
    x?: boolean
    y?: boolean
    chargeDate?: boolean
    expirationDate?: boolean
    lastInspection?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExtinguisherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "location" | "floor" | "x" | "y" | "chargeDate" | "expirationDate" | "lastInspection" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["extinguisher"]>

  export type $ExtinguisherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Extinguisher"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      location: string
      floor: $Enums.Floor
      x: number
      y: number
      chargeDate: Date
      expirationDate: Date
      lastInspection: Date | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["extinguisher"]>
    composites: {}
  }

  type ExtinguisherGetPayload<S extends boolean | null | undefined | ExtinguisherDefaultArgs> = $Result.GetResult<Prisma.$ExtinguisherPayload, S>

  type ExtinguisherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExtinguisherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExtinguisherCountAggregateInputType | true
    }

  export interface ExtinguisherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Extinguisher'], meta: { name: 'Extinguisher' } }
    /**
     * Find zero or one Extinguisher that matches the filter.
     * @param {ExtinguisherFindUniqueArgs} args - Arguments to find a Extinguisher
     * @example
     * // Get one Extinguisher
     * const extinguisher = await prisma.extinguisher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExtinguisherFindUniqueArgs>(args: SelectSubset<T, ExtinguisherFindUniqueArgs<ExtArgs>>): Prisma__ExtinguisherClient<$Result.GetResult<Prisma.$ExtinguisherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Extinguisher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExtinguisherFindUniqueOrThrowArgs} args - Arguments to find a Extinguisher
     * @example
     * // Get one Extinguisher
     * const extinguisher = await prisma.extinguisher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExtinguisherFindUniqueOrThrowArgs>(args: SelectSubset<T, ExtinguisherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExtinguisherClient<$Result.GetResult<Prisma.$ExtinguisherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Extinguisher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtinguisherFindFirstArgs} args - Arguments to find a Extinguisher
     * @example
     * // Get one Extinguisher
     * const extinguisher = await prisma.extinguisher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExtinguisherFindFirstArgs>(args?: SelectSubset<T, ExtinguisherFindFirstArgs<ExtArgs>>): Prisma__ExtinguisherClient<$Result.GetResult<Prisma.$ExtinguisherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Extinguisher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtinguisherFindFirstOrThrowArgs} args - Arguments to find a Extinguisher
     * @example
     * // Get one Extinguisher
     * const extinguisher = await prisma.extinguisher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExtinguisherFindFirstOrThrowArgs>(args?: SelectSubset<T, ExtinguisherFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExtinguisherClient<$Result.GetResult<Prisma.$ExtinguisherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Extinguishers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtinguisherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Extinguishers
     * const extinguishers = await prisma.extinguisher.findMany()
     * 
     * // Get first 10 Extinguishers
     * const extinguishers = await prisma.extinguisher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const extinguisherWithIdOnly = await prisma.extinguisher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExtinguisherFindManyArgs>(args?: SelectSubset<T, ExtinguisherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExtinguisherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Extinguisher.
     * @param {ExtinguisherCreateArgs} args - Arguments to create a Extinguisher.
     * @example
     * // Create one Extinguisher
     * const Extinguisher = await prisma.extinguisher.create({
     *   data: {
     *     // ... data to create a Extinguisher
     *   }
     * })
     * 
     */
    create<T extends ExtinguisherCreateArgs>(args: SelectSubset<T, ExtinguisherCreateArgs<ExtArgs>>): Prisma__ExtinguisherClient<$Result.GetResult<Prisma.$ExtinguisherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Extinguishers.
     * @param {ExtinguisherCreateManyArgs} args - Arguments to create many Extinguishers.
     * @example
     * // Create many Extinguishers
     * const extinguisher = await prisma.extinguisher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExtinguisherCreateManyArgs>(args?: SelectSubset<T, ExtinguisherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Extinguishers and returns the data saved in the database.
     * @param {ExtinguisherCreateManyAndReturnArgs} args - Arguments to create many Extinguishers.
     * @example
     * // Create many Extinguishers
     * const extinguisher = await prisma.extinguisher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Extinguishers and only return the `id`
     * const extinguisherWithIdOnly = await prisma.extinguisher.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExtinguisherCreateManyAndReturnArgs>(args?: SelectSubset<T, ExtinguisherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExtinguisherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Extinguisher.
     * @param {ExtinguisherDeleteArgs} args - Arguments to delete one Extinguisher.
     * @example
     * // Delete one Extinguisher
     * const Extinguisher = await prisma.extinguisher.delete({
     *   where: {
     *     // ... filter to delete one Extinguisher
     *   }
     * })
     * 
     */
    delete<T extends ExtinguisherDeleteArgs>(args: SelectSubset<T, ExtinguisherDeleteArgs<ExtArgs>>): Prisma__ExtinguisherClient<$Result.GetResult<Prisma.$ExtinguisherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Extinguisher.
     * @param {ExtinguisherUpdateArgs} args - Arguments to update one Extinguisher.
     * @example
     * // Update one Extinguisher
     * const extinguisher = await prisma.extinguisher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExtinguisherUpdateArgs>(args: SelectSubset<T, ExtinguisherUpdateArgs<ExtArgs>>): Prisma__ExtinguisherClient<$Result.GetResult<Prisma.$ExtinguisherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Extinguishers.
     * @param {ExtinguisherDeleteManyArgs} args - Arguments to filter Extinguishers to delete.
     * @example
     * // Delete a few Extinguishers
     * const { count } = await prisma.extinguisher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExtinguisherDeleteManyArgs>(args?: SelectSubset<T, ExtinguisherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Extinguishers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtinguisherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Extinguishers
     * const extinguisher = await prisma.extinguisher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExtinguisherUpdateManyArgs>(args: SelectSubset<T, ExtinguisherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Extinguishers and returns the data updated in the database.
     * @param {ExtinguisherUpdateManyAndReturnArgs} args - Arguments to update many Extinguishers.
     * @example
     * // Update many Extinguishers
     * const extinguisher = await prisma.extinguisher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Extinguishers and only return the `id`
     * const extinguisherWithIdOnly = await prisma.extinguisher.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExtinguisherUpdateManyAndReturnArgs>(args: SelectSubset<T, ExtinguisherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExtinguisherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Extinguisher.
     * @param {ExtinguisherUpsertArgs} args - Arguments to update or create a Extinguisher.
     * @example
     * // Update or create a Extinguisher
     * const extinguisher = await prisma.extinguisher.upsert({
     *   create: {
     *     // ... data to create a Extinguisher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Extinguisher we want to update
     *   }
     * })
     */
    upsert<T extends ExtinguisherUpsertArgs>(args: SelectSubset<T, ExtinguisherUpsertArgs<ExtArgs>>): Prisma__ExtinguisherClient<$Result.GetResult<Prisma.$ExtinguisherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Extinguishers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtinguisherCountArgs} args - Arguments to filter Extinguishers to count.
     * @example
     * // Count the number of Extinguishers
     * const count = await prisma.extinguisher.count({
     *   where: {
     *     // ... the filter for the Extinguishers we want to count
     *   }
     * })
    **/
    count<T extends ExtinguisherCountArgs>(
      args?: Subset<T, ExtinguisherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExtinguisherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Extinguisher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtinguisherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExtinguisherAggregateArgs>(args: Subset<T, ExtinguisherAggregateArgs>): Prisma.PrismaPromise<GetExtinguisherAggregateType<T>>

    /**
     * Group by Extinguisher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtinguisherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExtinguisherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExtinguisherGroupByArgs['orderBy'] }
        : { orderBy?: ExtinguisherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExtinguisherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExtinguisherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Extinguisher model
   */
  readonly fields: ExtinguisherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Extinguisher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExtinguisherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Extinguisher model
   */
  interface ExtinguisherFieldRefs {
    readonly id: FieldRef<"Extinguisher", 'String'>
    readonly location: FieldRef<"Extinguisher", 'String'>
    readonly floor: FieldRef<"Extinguisher", 'Floor'>
    readonly x: FieldRef<"Extinguisher", 'Int'>
    readonly y: FieldRef<"Extinguisher", 'Int'>
    readonly chargeDate: FieldRef<"Extinguisher", 'DateTime'>
    readonly expirationDate: FieldRef<"Extinguisher", 'DateTime'>
    readonly lastInspection: FieldRef<"Extinguisher", 'DateTime'>
    readonly notes: FieldRef<"Extinguisher", 'String'>
    readonly createdAt: FieldRef<"Extinguisher", 'DateTime'>
    readonly updatedAt: FieldRef<"Extinguisher", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Extinguisher findUnique
   */
  export type ExtinguisherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extinguisher
     */
    select?: ExtinguisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extinguisher
     */
    omit?: ExtinguisherOmit<ExtArgs> | null
    /**
     * Filter, which Extinguisher to fetch.
     */
    where: ExtinguisherWhereUniqueInput
  }

  /**
   * Extinguisher findUniqueOrThrow
   */
  export type ExtinguisherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extinguisher
     */
    select?: ExtinguisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extinguisher
     */
    omit?: ExtinguisherOmit<ExtArgs> | null
    /**
     * Filter, which Extinguisher to fetch.
     */
    where: ExtinguisherWhereUniqueInput
  }

  /**
   * Extinguisher findFirst
   */
  export type ExtinguisherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extinguisher
     */
    select?: ExtinguisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extinguisher
     */
    omit?: ExtinguisherOmit<ExtArgs> | null
    /**
     * Filter, which Extinguisher to fetch.
     */
    where?: ExtinguisherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Extinguishers to fetch.
     */
    orderBy?: ExtinguisherOrderByWithRelationInput | ExtinguisherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Extinguishers.
     */
    cursor?: ExtinguisherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Extinguishers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Extinguishers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Extinguishers.
     */
    distinct?: ExtinguisherScalarFieldEnum | ExtinguisherScalarFieldEnum[]
  }

  /**
   * Extinguisher findFirstOrThrow
   */
  export type ExtinguisherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extinguisher
     */
    select?: ExtinguisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extinguisher
     */
    omit?: ExtinguisherOmit<ExtArgs> | null
    /**
     * Filter, which Extinguisher to fetch.
     */
    where?: ExtinguisherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Extinguishers to fetch.
     */
    orderBy?: ExtinguisherOrderByWithRelationInput | ExtinguisherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Extinguishers.
     */
    cursor?: ExtinguisherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Extinguishers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Extinguishers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Extinguishers.
     */
    distinct?: ExtinguisherScalarFieldEnum | ExtinguisherScalarFieldEnum[]
  }

  /**
   * Extinguisher findMany
   */
  export type ExtinguisherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extinguisher
     */
    select?: ExtinguisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extinguisher
     */
    omit?: ExtinguisherOmit<ExtArgs> | null
    /**
     * Filter, which Extinguishers to fetch.
     */
    where?: ExtinguisherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Extinguishers to fetch.
     */
    orderBy?: ExtinguisherOrderByWithRelationInput | ExtinguisherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Extinguishers.
     */
    cursor?: ExtinguisherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Extinguishers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Extinguishers.
     */
    skip?: number
    distinct?: ExtinguisherScalarFieldEnum | ExtinguisherScalarFieldEnum[]
  }

  /**
   * Extinguisher create
   */
  export type ExtinguisherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extinguisher
     */
    select?: ExtinguisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extinguisher
     */
    omit?: ExtinguisherOmit<ExtArgs> | null
    /**
     * The data needed to create a Extinguisher.
     */
    data: XOR<ExtinguisherCreateInput, ExtinguisherUncheckedCreateInput>
  }

  /**
   * Extinguisher createMany
   */
  export type ExtinguisherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Extinguishers.
     */
    data: ExtinguisherCreateManyInput | ExtinguisherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Extinguisher createManyAndReturn
   */
  export type ExtinguisherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extinguisher
     */
    select?: ExtinguisherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Extinguisher
     */
    omit?: ExtinguisherOmit<ExtArgs> | null
    /**
     * The data used to create many Extinguishers.
     */
    data: ExtinguisherCreateManyInput | ExtinguisherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Extinguisher update
   */
  export type ExtinguisherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extinguisher
     */
    select?: ExtinguisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extinguisher
     */
    omit?: ExtinguisherOmit<ExtArgs> | null
    /**
     * The data needed to update a Extinguisher.
     */
    data: XOR<ExtinguisherUpdateInput, ExtinguisherUncheckedUpdateInput>
    /**
     * Choose, which Extinguisher to update.
     */
    where: ExtinguisherWhereUniqueInput
  }

  /**
   * Extinguisher updateMany
   */
  export type ExtinguisherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Extinguishers.
     */
    data: XOR<ExtinguisherUpdateManyMutationInput, ExtinguisherUncheckedUpdateManyInput>
    /**
     * Filter which Extinguishers to update
     */
    where?: ExtinguisherWhereInput
    /**
     * Limit how many Extinguishers to update.
     */
    limit?: number
  }

  /**
   * Extinguisher updateManyAndReturn
   */
  export type ExtinguisherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extinguisher
     */
    select?: ExtinguisherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Extinguisher
     */
    omit?: ExtinguisherOmit<ExtArgs> | null
    /**
     * The data used to update Extinguishers.
     */
    data: XOR<ExtinguisherUpdateManyMutationInput, ExtinguisherUncheckedUpdateManyInput>
    /**
     * Filter which Extinguishers to update
     */
    where?: ExtinguisherWhereInput
    /**
     * Limit how many Extinguishers to update.
     */
    limit?: number
  }

  /**
   * Extinguisher upsert
   */
  export type ExtinguisherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extinguisher
     */
    select?: ExtinguisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extinguisher
     */
    omit?: ExtinguisherOmit<ExtArgs> | null
    /**
     * The filter to search for the Extinguisher to update in case it exists.
     */
    where: ExtinguisherWhereUniqueInput
    /**
     * In case the Extinguisher found by the `where` argument doesn't exist, create a new Extinguisher with this data.
     */
    create: XOR<ExtinguisherCreateInput, ExtinguisherUncheckedCreateInput>
    /**
     * In case the Extinguisher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExtinguisherUpdateInput, ExtinguisherUncheckedUpdateInput>
  }

  /**
   * Extinguisher delete
   */
  export type ExtinguisherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extinguisher
     */
    select?: ExtinguisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extinguisher
     */
    omit?: ExtinguisherOmit<ExtArgs> | null
    /**
     * Filter which Extinguisher to delete.
     */
    where: ExtinguisherWhereUniqueInput
  }

  /**
   * Extinguisher deleteMany
   */
  export type ExtinguisherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Extinguishers to delete
     */
    where?: ExtinguisherWhereInput
    /**
     * Limit how many Extinguishers to delete.
     */
    limit?: number
  }

  /**
   * Extinguisher without action
   */
  export type ExtinguisherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extinguisher
     */
    select?: ExtinguisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extinguisher
     */
    omit?: ExtinguisherOmit<ExtArgs> | null
  }


  /**
   * Model FloorShape
   */

  export type AggregateFloorShape = {
    _count: FloorShapeCountAggregateOutputType | null
    _avg: FloorShapeAvgAggregateOutputType | null
    _sum: FloorShapeSumAggregateOutputType | null
    _min: FloorShapeMinAggregateOutputType | null
    _max: FloorShapeMaxAggregateOutputType | null
  }

  export type FloorShapeAvgAggregateOutputType = {
    x: number | null
    y: number | null
    width: number | null
    height: number | null
  }

  export type FloorShapeSumAggregateOutputType = {
    x: number | null
    y: number | null
    width: number | null
    height: number | null
  }

  export type FloorShapeMinAggregateOutputType = {
    id: string | null
    floor: $Enums.Floor | null
    key: string | null
    type: $Enums.ShapeType | null
    x: number | null
    y: number | null
    width: number | null
    height: number | null
    fill: string | null
    stroke: string | null
    text: string | null
    anchor: string | null
    className: string | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FloorShapeMaxAggregateOutputType = {
    id: string | null
    floor: $Enums.Floor | null
    key: string | null
    type: $Enums.ShapeType | null
    x: number | null
    y: number | null
    width: number | null
    height: number | null
    fill: string | null
    stroke: string | null
    text: string | null
    anchor: string | null
    className: string | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FloorShapeCountAggregateOutputType = {
    id: number
    floor: number
    key: number
    type: number
    x: number
    y: number
    width: number
    height: number
    fill: number
    stroke: number
    text: number
    anchor: number
    className: number
    deleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FloorShapeAvgAggregateInputType = {
    x?: true
    y?: true
    width?: true
    height?: true
  }

  export type FloorShapeSumAggregateInputType = {
    x?: true
    y?: true
    width?: true
    height?: true
  }

  export type FloorShapeMinAggregateInputType = {
    id?: true
    floor?: true
    key?: true
    type?: true
    x?: true
    y?: true
    width?: true
    height?: true
    fill?: true
    stroke?: true
    text?: true
    anchor?: true
    className?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FloorShapeMaxAggregateInputType = {
    id?: true
    floor?: true
    key?: true
    type?: true
    x?: true
    y?: true
    width?: true
    height?: true
    fill?: true
    stroke?: true
    text?: true
    anchor?: true
    className?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FloorShapeCountAggregateInputType = {
    id?: true
    floor?: true
    key?: true
    type?: true
    x?: true
    y?: true
    width?: true
    height?: true
    fill?: true
    stroke?: true
    text?: true
    anchor?: true
    className?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FloorShapeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FloorShape to aggregate.
     */
    where?: FloorShapeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FloorShapes to fetch.
     */
    orderBy?: FloorShapeOrderByWithRelationInput | FloorShapeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FloorShapeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FloorShapes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FloorShapes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FloorShapes
    **/
    _count?: true | FloorShapeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FloorShapeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FloorShapeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FloorShapeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FloorShapeMaxAggregateInputType
  }

  export type GetFloorShapeAggregateType<T extends FloorShapeAggregateArgs> = {
        [P in keyof T & keyof AggregateFloorShape]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFloorShape[P]>
      : GetScalarType<T[P], AggregateFloorShape[P]>
  }




  export type FloorShapeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FloorShapeWhereInput
    orderBy?: FloorShapeOrderByWithAggregationInput | FloorShapeOrderByWithAggregationInput[]
    by: FloorShapeScalarFieldEnum[] | FloorShapeScalarFieldEnum
    having?: FloorShapeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FloorShapeCountAggregateInputType | true
    _avg?: FloorShapeAvgAggregateInputType
    _sum?: FloorShapeSumAggregateInputType
    _min?: FloorShapeMinAggregateInputType
    _max?: FloorShapeMaxAggregateInputType
  }

  export type FloorShapeGroupByOutputType = {
    id: string
    floor: $Enums.Floor
    key: string
    type: $Enums.ShapeType
    x: number
    y: number
    width: number | null
    height: number | null
    fill: string | null
    stroke: string | null
    text: string | null
    anchor: string | null
    className: string | null
    deleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: FloorShapeCountAggregateOutputType | null
    _avg: FloorShapeAvgAggregateOutputType | null
    _sum: FloorShapeSumAggregateOutputType | null
    _min: FloorShapeMinAggregateOutputType | null
    _max: FloorShapeMaxAggregateOutputType | null
  }

  type GetFloorShapeGroupByPayload<T extends FloorShapeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FloorShapeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FloorShapeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FloorShapeGroupByOutputType[P]>
            : GetScalarType<T[P], FloorShapeGroupByOutputType[P]>
        }
      >
    >


  export type FloorShapeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    floor?: boolean
    key?: boolean
    type?: boolean
    x?: boolean
    y?: boolean
    width?: boolean
    height?: boolean
    fill?: boolean
    stroke?: boolean
    text?: boolean
    anchor?: boolean
    className?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["floorShape"]>

  export type FloorShapeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    floor?: boolean
    key?: boolean
    type?: boolean
    x?: boolean
    y?: boolean
    width?: boolean
    height?: boolean
    fill?: boolean
    stroke?: boolean
    text?: boolean
    anchor?: boolean
    className?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["floorShape"]>

  export type FloorShapeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    floor?: boolean
    key?: boolean
    type?: boolean
    x?: boolean
    y?: boolean
    width?: boolean
    height?: boolean
    fill?: boolean
    stroke?: boolean
    text?: boolean
    anchor?: boolean
    className?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["floorShape"]>

  export type FloorShapeSelectScalar = {
    id?: boolean
    floor?: boolean
    key?: boolean
    type?: boolean
    x?: boolean
    y?: boolean
    width?: boolean
    height?: boolean
    fill?: boolean
    stroke?: boolean
    text?: boolean
    anchor?: boolean
    className?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FloorShapeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "floor" | "key" | "type" | "x" | "y" | "width" | "height" | "fill" | "stroke" | "text" | "anchor" | "className" | "deleted" | "createdAt" | "updatedAt", ExtArgs["result"]["floorShape"]>

  export type $FloorShapePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FloorShape"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      floor: $Enums.Floor
      key: string
      type: $Enums.ShapeType
      x: number
      y: number
      width: number | null
      height: number | null
      fill: string | null
      stroke: string | null
      text: string | null
      anchor: string | null
      className: string | null
      deleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["floorShape"]>
    composites: {}
  }

  type FloorShapeGetPayload<S extends boolean | null | undefined | FloorShapeDefaultArgs> = $Result.GetResult<Prisma.$FloorShapePayload, S>

  type FloorShapeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FloorShapeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FloorShapeCountAggregateInputType | true
    }

  export interface FloorShapeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FloorShape'], meta: { name: 'FloorShape' } }
    /**
     * Find zero or one FloorShape that matches the filter.
     * @param {FloorShapeFindUniqueArgs} args - Arguments to find a FloorShape
     * @example
     * // Get one FloorShape
     * const floorShape = await prisma.floorShape.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FloorShapeFindUniqueArgs>(args: SelectSubset<T, FloorShapeFindUniqueArgs<ExtArgs>>): Prisma__FloorShapeClient<$Result.GetResult<Prisma.$FloorShapePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FloorShape that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FloorShapeFindUniqueOrThrowArgs} args - Arguments to find a FloorShape
     * @example
     * // Get one FloorShape
     * const floorShape = await prisma.floorShape.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FloorShapeFindUniqueOrThrowArgs>(args: SelectSubset<T, FloorShapeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FloorShapeClient<$Result.GetResult<Prisma.$FloorShapePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FloorShape that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorShapeFindFirstArgs} args - Arguments to find a FloorShape
     * @example
     * // Get one FloorShape
     * const floorShape = await prisma.floorShape.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FloorShapeFindFirstArgs>(args?: SelectSubset<T, FloorShapeFindFirstArgs<ExtArgs>>): Prisma__FloorShapeClient<$Result.GetResult<Prisma.$FloorShapePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FloorShape that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorShapeFindFirstOrThrowArgs} args - Arguments to find a FloorShape
     * @example
     * // Get one FloorShape
     * const floorShape = await prisma.floorShape.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FloorShapeFindFirstOrThrowArgs>(args?: SelectSubset<T, FloorShapeFindFirstOrThrowArgs<ExtArgs>>): Prisma__FloorShapeClient<$Result.GetResult<Prisma.$FloorShapePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FloorShapes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorShapeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FloorShapes
     * const floorShapes = await prisma.floorShape.findMany()
     * 
     * // Get first 10 FloorShapes
     * const floorShapes = await prisma.floorShape.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const floorShapeWithIdOnly = await prisma.floorShape.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FloorShapeFindManyArgs>(args?: SelectSubset<T, FloorShapeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FloorShapePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FloorShape.
     * @param {FloorShapeCreateArgs} args - Arguments to create a FloorShape.
     * @example
     * // Create one FloorShape
     * const FloorShape = await prisma.floorShape.create({
     *   data: {
     *     // ... data to create a FloorShape
     *   }
     * })
     * 
     */
    create<T extends FloorShapeCreateArgs>(args: SelectSubset<T, FloorShapeCreateArgs<ExtArgs>>): Prisma__FloorShapeClient<$Result.GetResult<Prisma.$FloorShapePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FloorShapes.
     * @param {FloorShapeCreateManyArgs} args - Arguments to create many FloorShapes.
     * @example
     * // Create many FloorShapes
     * const floorShape = await prisma.floorShape.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FloorShapeCreateManyArgs>(args?: SelectSubset<T, FloorShapeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FloorShapes and returns the data saved in the database.
     * @param {FloorShapeCreateManyAndReturnArgs} args - Arguments to create many FloorShapes.
     * @example
     * // Create many FloorShapes
     * const floorShape = await prisma.floorShape.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FloorShapes and only return the `id`
     * const floorShapeWithIdOnly = await prisma.floorShape.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FloorShapeCreateManyAndReturnArgs>(args?: SelectSubset<T, FloorShapeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FloorShapePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FloorShape.
     * @param {FloorShapeDeleteArgs} args - Arguments to delete one FloorShape.
     * @example
     * // Delete one FloorShape
     * const FloorShape = await prisma.floorShape.delete({
     *   where: {
     *     // ... filter to delete one FloorShape
     *   }
     * })
     * 
     */
    delete<T extends FloorShapeDeleteArgs>(args: SelectSubset<T, FloorShapeDeleteArgs<ExtArgs>>): Prisma__FloorShapeClient<$Result.GetResult<Prisma.$FloorShapePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FloorShape.
     * @param {FloorShapeUpdateArgs} args - Arguments to update one FloorShape.
     * @example
     * // Update one FloorShape
     * const floorShape = await prisma.floorShape.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FloorShapeUpdateArgs>(args: SelectSubset<T, FloorShapeUpdateArgs<ExtArgs>>): Prisma__FloorShapeClient<$Result.GetResult<Prisma.$FloorShapePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FloorShapes.
     * @param {FloorShapeDeleteManyArgs} args - Arguments to filter FloorShapes to delete.
     * @example
     * // Delete a few FloorShapes
     * const { count } = await prisma.floorShape.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FloorShapeDeleteManyArgs>(args?: SelectSubset<T, FloorShapeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FloorShapes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorShapeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FloorShapes
     * const floorShape = await prisma.floorShape.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FloorShapeUpdateManyArgs>(args: SelectSubset<T, FloorShapeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FloorShapes and returns the data updated in the database.
     * @param {FloorShapeUpdateManyAndReturnArgs} args - Arguments to update many FloorShapes.
     * @example
     * // Update many FloorShapes
     * const floorShape = await prisma.floorShape.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FloorShapes and only return the `id`
     * const floorShapeWithIdOnly = await prisma.floorShape.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FloorShapeUpdateManyAndReturnArgs>(args: SelectSubset<T, FloorShapeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FloorShapePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FloorShape.
     * @param {FloorShapeUpsertArgs} args - Arguments to update or create a FloorShape.
     * @example
     * // Update or create a FloorShape
     * const floorShape = await prisma.floorShape.upsert({
     *   create: {
     *     // ... data to create a FloorShape
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FloorShape we want to update
     *   }
     * })
     */
    upsert<T extends FloorShapeUpsertArgs>(args: SelectSubset<T, FloorShapeUpsertArgs<ExtArgs>>): Prisma__FloorShapeClient<$Result.GetResult<Prisma.$FloorShapePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FloorShapes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorShapeCountArgs} args - Arguments to filter FloorShapes to count.
     * @example
     * // Count the number of FloorShapes
     * const count = await prisma.floorShape.count({
     *   where: {
     *     // ... the filter for the FloorShapes we want to count
     *   }
     * })
    **/
    count<T extends FloorShapeCountArgs>(
      args?: Subset<T, FloorShapeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FloorShapeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FloorShape.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorShapeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FloorShapeAggregateArgs>(args: Subset<T, FloorShapeAggregateArgs>): Prisma.PrismaPromise<GetFloorShapeAggregateType<T>>

    /**
     * Group by FloorShape.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorShapeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FloorShapeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FloorShapeGroupByArgs['orderBy'] }
        : { orderBy?: FloorShapeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FloorShapeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFloorShapeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FloorShape model
   */
  readonly fields: FloorShapeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FloorShape.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FloorShapeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FloorShape model
   */
  interface FloorShapeFieldRefs {
    readonly id: FieldRef<"FloorShape", 'String'>
    readonly floor: FieldRef<"FloorShape", 'Floor'>
    readonly key: FieldRef<"FloorShape", 'String'>
    readonly type: FieldRef<"FloorShape", 'ShapeType'>
    readonly x: FieldRef<"FloorShape", 'Int'>
    readonly y: FieldRef<"FloorShape", 'Int'>
    readonly width: FieldRef<"FloorShape", 'Int'>
    readonly height: FieldRef<"FloorShape", 'Int'>
    readonly fill: FieldRef<"FloorShape", 'String'>
    readonly stroke: FieldRef<"FloorShape", 'String'>
    readonly text: FieldRef<"FloorShape", 'String'>
    readonly anchor: FieldRef<"FloorShape", 'String'>
    readonly className: FieldRef<"FloorShape", 'String'>
    readonly deleted: FieldRef<"FloorShape", 'Boolean'>
    readonly createdAt: FieldRef<"FloorShape", 'DateTime'>
    readonly updatedAt: FieldRef<"FloorShape", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FloorShape findUnique
   */
  export type FloorShapeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FloorShape
     */
    select?: FloorShapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FloorShape
     */
    omit?: FloorShapeOmit<ExtArgs> | null
    /**
     * Filter, which FloorShape to fetch.
     */
    where: FloorShapeWhereUniqueInput
  }

  /**
   * FloorShape findUniqueOrThrow
   */
  export type FloorShapeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FloorShape
     */
    select?: FloorShapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FloorShape
     */
    omit?: FloorShapeOmit<ExtArgs> | null
    /**
     * Filter, which FloorShape to fetch.
     */
    where: FloorShapeWhereUniqueInput
  }

  /**
   * FloorShape findFirst
   */
  export type FloorShapeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FloorShape
     */
    select?: FloorShapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FloorShape
     */
    omit?: FloorShapeOmit<ExtArgs> | null
    /**
     * Filter, which FloorShape to fetch.
     */
    where?: FloorShapeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FloorShapes to fetch.
     */
    orderBy?: FloorShapeOrderByWithRelationInput | FloorShapeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FloorShapes.
     */
    cursor?: FloorShapeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FloorShapes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FloorShapes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FloorShapes.
     */
    distinct?: FloorShapeScalarFieldEnum | FloorShapeScalarFieldEnum[]
  }

  /**
   * FloorShape findFirstOrThrow
   */
  export type FloorShapeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FloorShape
     */
    select?: FloorShapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FloorShape
     */
    omit?: FloorShapeOmit<ExtArgs> | null
    /**
     * Filter, which FloorShape to fetch.
     */
    where?: FloorShapeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FloorShapes to fetch.
     */
    orderBy?: FloorShapeOrderByWithRelationInput | FloorShapeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FloorShapes.
     */
    cursor?: FloorShapeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FloorShapes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FloorShapes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FloorShapes.
     */
    distinct?: FloorShapeScalarFieldEnum | FloorShapeScalarFieldEnum[]
  }

  /**
   * FloorShape findMany
   */
  export type FloorShapeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FloorShape
     */
    select?: FloorShapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FloorShape
     */
    omit?: FloorShapeOmit<ExtArgs> | null
    /**
     * Filter, which FloorShapes to fetch.
     */
    where?: FloorShapeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FloorShapes to fetch.
     */
    orderBy?: FloorShapeOrderByWithRelationInput | FloorShapeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FloorShapes.
     */
    cursor?: FloorShapeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FloorShapes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FloorShapes.
     */
    skip?: number
    distinct?: FloorShapeScalarFieldEnum | FloorShapeScalarFieldEnum[]
  }

  /**
   * FloorShape create
   */
  export type FloorShapeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FloorShape
     */
    select?: FloorShapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FloorShape
     */
    omit?: FloorShapeOmit<ExtArgs> | null
    /**
     * The data needed to create a FloorShape.
     */
    data: XOR<FloorShapeCreateInput, FloorShapeUncheckedCreateInput>
  }

  /**
   * FloorShape createMany
   */
  export type FloorShapeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FloorShapes.
     */
    data: FloorShapeCreateManyInput | FloorShapeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FloorShape createManyAndReturn
   */
  export type FloorShapeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FloorShape
     */
    select?: FloorShapeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FloorShape
     */
    omit?: FloorShapeOmit<ExtArgs> | null
    /**
     * The data used to create many FloorShapes.
     */
    data: FloorShapeCreateManyInput | FloorShapeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FloorShape update
   */
  export type FloorShapeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FloorShape
     */
    select?: FloorShapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FloorShape
     */
    omit?: FloorShapeOmit<ExtArgs> | null
    /**
     * The data needed to update a FloorShape.
     */
    data: XOR<FloorShapeUpdateInput, FloorShapeUncheckedUpdateInput>
    /**
     * Choose, which FloorShape to update.
     */
    where: FloorShapeWhereUniqueInput
  }

  /**
   * FloorShape updateMany
   */
  export type FloorShapeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FloorShapes.
     */
    data: XOR<FloorShapeUpdateManyMutationInput, FloorShapeUncheckedUpdateManyInput>
    /**
     * Filter which FloorShapes to update
     */
    where?: FloorShapeWhereInput
    /**
     * Limit how many FloorShapes to update.
     */
    limit?: number
  }

  /**
   * FloorShape updateManyAndReturn
   */
  export type FloorShapeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FloorShape
     */
    select?: FloorShapeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FloorShape
     */
    omit?: FloorShapeOmit<ExtArgs> | null
    /**
     * The data used to update FloorShapes.
     */
    data: XOR<FloorShapeUpdateManyMutationInput, FloorShapeUncheckedUpdateManyInput>
    /**
     * Filter which FloorShapes to update
     */
    where?: FloorShapeWhereInput
    /**
     * Limit how many FloorShapes to update.
     */
    limit?: number
  }

  /**
   * FloorShape upsert
   */
  export type FloorShapeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FloorShape
     */
    select?: FloorShapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FloorShape
     */
    omit?: FloorShapeOmit<ExtArgs> | null
    /**
     * The filter to search for the FloorShape to update in case it exists.
     */
    where: FloorShapeWhereUniqueInput
    /**
     * In case the FloorShape found by the `where` argument doesn't exist, create a new FloorShape with this data.
     */
    create: XOR<FloorShapeCreateInput, FloorShapeUncheckedCreateInput>
    /**
     * In case the FloorShape was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FloorShapeUpdateInput, FloorShapeUncheckedUpdateInput>
  }

  /**
   * FloorShape delete
   */
  export type FloorShapeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FloorShape
     */
    select?: FloorShapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FloorShape
     */
    omit?: FloorShapeOmit<ExtArgs> | null
    /**
     * Filter which FloorShape to delete.
     */
    where: FloorShapeWhereUniqueInput
  }

  /**
   * FloorShape deleteMany
   */
  export type FloorShapeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FloorShapes to delete
     */
    where?: FloorShapeWhereInput
    /**
     * Limit how many FloorShapes to delete.
     */
    limit?: number
  }

  /**
   * FloorShape without action
   */
  export type FloorShapeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FloorShape
     */
    select?: FloorShapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FloorShape
     */
    omit?: FloorShapeOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const NotificationTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type NotificationTokenScalarFieldEnum = (typeof NotificationTokenScalarFieldEnum)[keyof typeof NotificationTokenScalarFieldEnum]


  export const ExtinguisherScalarFieldEnum: {
    id: 'id',
    location: 'location',
    floor: 'floor',
    x: 'x',
    y: 'y',
    chargeDate: 'chargeDate',
    expirationDate: 'expirationDate',
    lastInspection: 'lastInspection',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExtinguisherScalarFieldEnum = (typeof ExtinguisherScalarFieldEnum)[keyof typeof ExtinguisherScalarFieldEnum]


  export const FloorShapeScalarFieldEnum: {
    id: 'id',
    floor: 'floor',
    key: 'key',
    type: 'type',
    x: 'x',
    y: 'y',
    width: 'width',
    height: 'height',
    fill: 'fill',
    stroke: 'stroke',
    text: 'text',
    anchor: 'anchor',
    className: 'className',
    deleted: 'deleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FloorShapeScalarFieldEnum = (typeof FloorShapeScalarFieldEnum)[keyof typeof FloorShapeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Floor'
   */
  export type EnumFloorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Floor'>
    


  /**
   * Reference to a field of type 'Floor[]'
   */
  export type ListEnumFloorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Floor[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ShapeType'
   */
  export type EnumShapeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShapeType'>
    


  /**
   * Reference to a field of type 'ShapeType[]'
   */
  export type ListEnumShapeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShapeType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tokens?: NotificationTokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tokens?: NotificationTokenOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tokens?: NotificationTokenListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type NotificationTokenWhereInput = {
    AND?: NotificationTokenWhereInput | NotificationTokenWhereInput[]
    OR?: NotificationTokenWhereInput[]
    NOT?: NotificationTokenWhereInput | NotificationTokenWhereInput[]
    id?: StringFilter<"NotificationToken"> | string
    token?: StringFilter<"NotificationToken"> | string
    userId?: StringNullableFilter<"NotificationToken"> | string | null
    createdAt?: DateTimeFilter<"NotificationToken"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type NotificationTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: NotificationTokenWhereInput | NotificationTokenWhereInput[]
    OR?: NotificationTokenWhereInput[]
    NOT?: NotificationTokenWhereInput | NotificationTokenWhereInput[]
    userId?: StringNullableFilter<"NotificationToken"> | string | null
    createdAt?: DateTimeFilter<"NotificationToken"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "token">

  export type NotificationTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: NotificationTokenCountOrderByAggregateInput
    _max?: NotificationTokenMaxOrderByAggregateInput
    _min?: NotificationTokenMinOrderByAggregateInput
  }

  export type NotificationTokenScalarWhereWithAggregatesInput = {
    AND?: NotificationTokenScalarWhereWithAggregatesInput | NotificationTokenScalarWhereWithAggregatesInput[]
    OR?: NotificationTokenScalarWhereWithAggregatesInput[]
    NOT?: NotificationTokenScalarWhereWithAggregatesInput | NotificationTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NotificationToken"> | string
    token?: StringWithAggregatesFilter<"NotificationToken"> | string
    userId?: StringNullableWithAggregatesFilter<"NotificationToken"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"NotificationToken"> | Date | string
  }

  export type ExtinguisherWhereInput = {
    AND?: ExtinguisherWhereInput | ExtinguisherWhereInput[]
    OR?: ExtinguisherWhereInput[]
    NOT?: ExtinguisherWhereInput | ExtinguisherWhereInput[]
    id?: StringFilter<"Extinguisher"> | string
    location?: StringFilter<"Extinguisher"> | string
    floor?: EnumFloorFilter<"Extinguisher"> | $Enums.Floor
    x?: IntFilter<"Extinguisher"> | number
    y?: IntFilter<"Extinguisher"> | number
    chargeDate?: DateTimeFilter<"Extinguisher"> | Date | string
    expirationDate?: DateTimeFilter<"Extinguisher"> | Date | string
    lastInspection?: DateTimeNullableFilter<"Extinguisher"> | Date | string | null
    notes?: StringNullableFilter<"Extinguisher"> | string | null
    createdAt?: DateTimeFilter<"Extinguisher"> | Date | string
    updatedAt?: DateTimeFilter<"Extinguisher"> | Date | string
  }

  export type ExtinguisherOrderByWithRelationInput = {
    id?: SortOrder
    location?: SortOrder
    floor?: SortOrder
    x?: SortOrder
    y?: SortOrder
    chargeDate?: SortOrder
    expirationDate?: SortOrder
    lastInspection?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExtinguisherWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExtinguisherWhereInput | ExtinguisherWhereInput[]
    OR?: ExtinguisherWhereInput[]
    NOT?: ExtinguisherWhereInput | ExtinguisherWhereInput[]
    location?: StringFilter<"Extinguisher"> | string
    floor?: EnumFloorFilter<"Extinguisher"> | $Enums.Floor
    x?: IntFilter<"Extinguisher"> | number
    y?: IntFilter<"Extinguisher"> | number
    chargeDate?: DateTimeFilter<"Extinguisher"> | Date | string
    expirationDate?: DateTimeFilter<"Extinguisher"> | Date | string
    lastInspection?: DateTimeNullableFilter<"Extinguisher"> | Date | string | null
    notes?: StringNullableFilter<"Extinguisher"> | string | null
    createdAt?: DateTimeFilter<"Extinguisher"> | Date | string
    updatedAt?: DateTimeFilter<"Extinguisher"> | Date | string
  }, "id">

  export type ExtinguisherOrderByWithAggregationInput = {
    id?: SortOrder
    location?: SortOrder
    floor?: SortOrder
    x?: SortOrder
    y?: SortOrder
    chargeDate?: SortOrder
    expirationDate?: SortOrder
    lastInspection?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExtinguisherCountOrderByAggregateInput
    _avg?: ExtinguisherAvgOrderByAggregateInput
    _max?: ExtinguisherMaxOrderByAggregateInput
    _min?: ExtinguisherMinOrderByAggregateInput
    _sum?: ExtinguisherSumOrderByAggregateInput
  }

  export type ExtinguisherScalarWhereWithAggregatesInput = {
    AND?: ExtinguisherScalarWhereWithAggregatesInput | ExtinguisherScalarWhereWithAggregatesInput[]
    OR?: ExtinguisherScalarWhereWithAggregatesInput[]
    NOT?: ExtinguisherScalarWhereWithAggregatesInput | ExtinguisherScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Extinguisher"> | string
    location?: StringWithAggregatesFilter<"Extinguisher"> | string
    floor?: EnumFloorWithAggregatesFilter<"Extinguisher"> | $Enums.Floor
    x?: IntWithAggregatesFilter<"Extinguisher"> | number
    y?: IntWithAggregatesFilter<"Extinguisher"> | number
    chargeDate?: DateTimeWithAggregatesFilter<"Extinguisher"> | Date | string
    expirationDate?: DateTimeWithAggregatesFilter<"Extinguisher"> | Date | string
    lastInspection?: DateTimeNullableWithAggregatesFilter<"Extinguisher"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"Extinguisher"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Extinguisher"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Extinguisher"> | Date | string
  }

  export type FloorShapeWhereInput = {
    AND?: FloorShapeWhereInput | FloorShapeWhereInput[]
    OR?: FloorShapeWhereInput[]
    NOT?: FloorShapeWhereInput | FloorShapeWhereInput[]
    id?: StringFilter<"FloorShape"> | string
    floor?: EnumFloorFilter<"FloorShape"> | $Enums.Floor
    key?: StringFilter<"FloorShape"> | string
    type?: EnumShapeTypeFilter<"FloorShape"> | $Enums.ShapeType
    x?: IntFilter<"FloorShape"> | number
    y?: IntFilter<"FloorShape"> | number
    width?: IntNullableFilter<"FloorShape"> | number | null
    height?: IntNullableFilter<"FloorShape"> | number | null
    fill?: StringNullableFilter<"FloorShape"> | string | null
    stroke?: StringNullableFilter<"FloorShape"> | string | null
    text?: StringNullableFilter<"FloorShape"> | string | null
    anchor?: StringNullableFilter<"FloorShape"> | string | null
    className?: StringNullableFilter<"FloorShape"> | string | null
    deleted?: BoolFilter<"FloorShape"> | boolean
    createdAt?: DateTimeFilter<"FloorShape"> | Date | string
    updatedAt?: DateTimeFilter<"FloorShape"> | Date | string
  }

  export type FloorShapeOrderByWithRelationInput = {
    id?: SortOrder
    floor?: SortOrder
    key?: SortOrder
    type?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    fill?: SortOrderInput | SortOrder
    stroke?: SortOrderInput | SortOrder
    text?: SortOrderInput | SortOrder
    anchor?: SortOrderInput | SortOrder
    className?: SortOrderInput | SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloorShapeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: FloorShapeWhereInput | FloorShapeWhereInput[]
    OR?: FloorShapeWhereInput[]
    NOT?: FloorShapeWhereInput | FloorShapeWhereInput[]
    floor?: EnumFloorFilter<"FloorShape"> | $Enums.Floor
    type?: EnumShapeTypeFilter<"FloorShape"> | $Enums.ShapeType
    x?: IntFilter<"FloorShape"> | number
    y?: IntFilter<"FloorShape"> | number
    width?: IntNullableFilter<"FloorShape"> | number | null
    height?: IntNullableFilter<"FloorShape"> | number | null
    fill?: StringNullableFilter<"FloorShape"> | string | null
    stroke?: StringNullableFilter<"FloorShape"> | string | null
    text?: StringNullableFilter<"FloorShape"> | string | null
    anchor?: StringNullableFilter<"FloorShape"> | string | null
    className?: StringNullableFilter<"FloorShape"> | string | null
    deleted?: BoolFilter<"FloorShape"> | boolean
    createdAt?: DateTimeFilter<"FloorShape"> | Date | string
    updatedAt?: DateTimeFilter<"FloorShape"> | Date | string
  }, "id" | "key">

  export type FloorShapeOrderByWithAggregationInput = {
    id?: SortOrder
    floor?: SortOrder
    key?: SortOrder
    type?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    fill?: SortOrderInput | SortOrder
    stroke?: SortOrderInput | SortOrder
    text?: SortOrderInput | SortOrder
    anchor?: SortOrderInput | SortOrder
    className?: SortOrderInput | SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FloorShapeCountOrderByAggregateInput
    _avg?: FloorShapeAvgOrderByAggregateInput
    _max?: FloorShapeMaxOrderByAggregateInput
    _min?: FloorShapeMinOrderByAggregateInput
    _sum?: FloorShapeSumOrderByAggregateInput
  }

  export type FloorShapeScalarWhereWithAggregatesInput = {
    AND?: FloorShapeScalarWhereWithAggregatesInput | FloorShapeScalarWhereWithAggregatesInput[]
    OR?: FloorShapeScalarWhereWithAggregatesInput[]
    NOT?: FloorShapeScalarWhereWithAggregatesInput | FloorShapeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FloorShape"> | string
    floor?: EnumFloorWithAggregatesFilter<"FloorShape"> | $Enums.Floor
    key?: StringWithAggregatesFilter<"FloorShape"> | string
    type?: EnumShapeTypeWithAggregatesFilter<"FloorShape"> | $Enums.ShapeType
    x?: IntWithAggregatesFilter<"FloorShape"> | number
    y?: IntWithAggregatesFilter<"FloorShape"> | number
    width?: IntNullableWithAggregatesFilter<"FloorShape"> | number | null
    height?: IntNullableWithAggregatesFilter<"FloorShape"> | number | null
    fill?: StringNullableWithAggregatesFilter<"FloorShape"> | string | null
    stroke?: StringNullableWithAggregatesFilter<"FloorShape"> | string | null
    text?: StringNullableWithAggregatesFilter<"FloorShape"> | string | null
    anchor?: StringNullableWithAggregatesFilter<"FloorShape"> | string | null
    className?: StringNullableWithAggregatesFilter<"FloorShape"> | string | null
    deleted?: BoolWithAggregatesFilter<"FloorShape"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"FloorShape"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FloorShape"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: NotificationTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: NotificationTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: NotificationTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: NotificationTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationTokenCreateInput = {
    id?: string
    token: string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutTokensInput
  }

  export type NotificationTokenUncheckedCreateInput = {
    id?: string
    token: string
    userId?: string | null
    createdAt?: Date | string
  }

  export type NotificationTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutTokensNestedInput
  }

  export type NotificationTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationTokenCreateManyInput = {
    id?: string
    token: string
    userId?: string | null
    createdAt?: Date | string
  }

  export type NotificationTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExtinguisherCreateInput = {
    id?: string
    location: string
    floor: $Enums.Floor
    x: number
    y: number
    chargeDate: Date | string
    expirationDate: Date | string
    lastInspection?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExtinguisherUncheckedCreateInput = {
    id?: string
    location: string
    floor: $Enums.Floor
    x: number
    y: number
    chargeDate: Date | string
    expirationDate: Date | string
    lastInspection?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExtinguisherUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    floor?: EnumFloorFieldUpdateOperationsInput | $Enums.Floor
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    chargeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastInspection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExtinguisherUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    floor?: EnumFloorFieldUpdateOperationsInput | $Enums.Floor
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    chargeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastInspection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExtinguisherCreateManyInput = {
    id?: string
    location: string
    floor: $Enums.Floor
    x: number
    y: number
    chargeDate: Date | string
    expirationDate: Date | string
    lastInspection?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExtinguisherUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    floor?: EnumFloorFieldUpdateOperationsInput | $Enums.Floor
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    chargeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastInspection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExtinguisherUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    floor?: EnumFloorFieldUpdateOperationsInput | $Enums.Floor
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    chargeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastInspection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FloorShapeCreateInput = {
    id?: string
    floor: $Enums.Floor
    key: string
    type: $Enums.ShapeType
    x: number
    y: number
    width?: number | null
    height?: number | null
    fill?: string | null
    stroke?: string | null
    text?: string | null
    anchor?: string | null
    className?: string | null
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FloorShapeUncheckedCreateInput = {
    id?: string
    floor: $Enums.Floor
    key: string
    type: $Enums.ShapeType
    x: number
    y: number
    width?: number | null
    height?: number | null
    fill?: string | null
    stroke?: string | null
    text?: string | null
    anchor?: string | null
    className?: string | null
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FloorShapeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    floor?: EnumFloorFieldUpdateOperationsInput | $Enums.Floor
    key?: StringFieldUpdateOperationsInput | string
    type?: EnumShapeTypeFieldUpdateOperationsInput | $Enums.ShapeType
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    fill?: NullableStringFieldUpdateOperationsInput | string | null
    stroke?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    anchor?: NullableStringFieldUpdateOperationsInput | string | null
    className?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FloorShapeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    floor?: EnumFloorFieldUpdateOperationsInput | $Enums.Floor
    key?: StringFieldUpdateOperationsInput | string
    type?: EnumShapeTypeFieldUpdateOperationsInput | $Enums.ShapeType
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    fill?: NullableStringFieldUpdateOperationsInput | string | null
    stroke?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    anchor?: NullableStringFieldUpdateOperationsInput | string | null
    className?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FloorShapeCreateManyInput = {
    id?: string
    floor: $Enums.Floor
    key: string
    type: $Enums.ShapeType
    x: number
    y: number
    width?: number | null
    height?: number | null
    fill?: string | null
    stroke?: string | null
    text?: string | null
    anchor?: string | null
    className?: string | null
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FloorShapeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    floor?: EnumFloorFieldUpdateOperationsInput | $Enums.Floor
    key?: StringFieldUpdateOperationsInput | string
    type?: EnumShapeTypeFieldUpdateOperationsInput | $Enums.ShapeType
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    fill?: NullableStringFieldUpdateOperationsInput | string | null
    stroke?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    anchor?: NullableStringFieldUpdateOperationsInput | string | null
    className?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FloorShapeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    floor?: EnumFloorFieldUpdateOperationsInput | $Enums.Floor
    key?: StringFieldUpdateOperationsInput | string
    type?: EnumShapeTypeFieldUpdateOperationsInput | $Enums.ShapeType
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    fill?: NullableStringFieldUpdateOperationsInput | string | null
    stroke?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    anchor?: NullableStringFieldUpdateOperationsInput | string | null
    className?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NotificationTokenListRelationFilter = {
    every?: NotificationTokenWhereInput
    some?: NotificationTokenWhereInput
    none?: NotificationTokenWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NotificationTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type NotificationTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumFloorFilter<$PrismaModel = never> = {
    equals?: $Enums.Floor | EnumFloorFieldRefInput<$PrismaModel>
    in?: $Enums.Floor[] | ListEnumFloorFieldRefInput<$PrismaModel>
    notIn?: $Enums.Floor[] | ListEnumFloorFieldRefInput<$PrismaModel>
    not?: NestedEnumFloorFilter<$PrismaModel> | $Enums.Floor
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ExtinguisherCountOrderByAggregateInput = {
    id?: SortOrder
    location?: SortOrder
    floor?: SortOrder
    x?: SortOrder
    y?: SortOrder
    chargeDate?: SortOrder
    expirationDate?: SortOrder
    lastInspection?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExtinguisherAvgOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
  }

  export type ExtinguisherMaxOrderByAggregateInput = {
    id?: SortOrder
    location?: SortOrder
    floor?: SortOrder
    x?: SortOrder
    y?: SortOrder
    chargeDate?: SortOrder
    expirationDate?: SortOrder
    lastInspection?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExtinguisherMinOrderByAggregateInput = {
    id?: SortOrder
    location?: SortOrder
    floor?: SortOrder
    x?: SortOrder
    y?: SortOrder
    chargeDate?: SortOrder
    expirationDate?: SortOrder
    lastInspection?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExtinguisherSumOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
  }

  export type EnumFloorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Floor | EnumFloorFieldRefInput<$PrismaModel>
    in?: $Enums.Floor[] | ListEnumFloorFieldRefInput<$PrismaModel>
    notIn?: $Enums.Floor[] | ListEnumFloorFieldRefInput<$PrismaModel>
    not?: NestedEnumFloorWithAggregatesFilter<$PrismaModel> | $Enums.Floor
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFloorFilter<$PrismaModel>
    _max?: NestedEnumFloorFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumShapeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ShapeType | EnumShapeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ShapeType[] | ListEnumShapeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShapeType[] | ListEnumShapeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumShapeTypeFilter<$PrismaModel> | $Enums.ShapeType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloorShapeCountOrderByAggregateInput = {
    id?: SortOrder
    floor?: SortOrder
    key?: SortOrder
    type?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    fill?: SortOrder
    stroke?: SortOrder
    text?: SortOrder
    anchor?: SortOrder
    className?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloorShapeAvgOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type FloorShapeMaxOrderByAggregateInput = {
    id?: SortOrder
    floor?: SortOrder
    key?: SortOrder
    type?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    fill?: SortOrder
    stroke?: SortOrder
    text?: SortOrder
    anchor?: SortOrder
    className?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloorShapeMinOrderByAggregateInput = {
    id?: SortOrder
    floor?: SortOrder
    key?: SortOrder
    type?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    fill?: SortOrder
    stroke?: SortOrder
    text?: SortOrder
    anchor?: SortOrder
    className?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloorShapeSumOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type EnumShapeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShapeType | EnumShapeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ShapeType[] | ListEnumShapeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShapeType[] | ListEnumShapeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumShapeTypeWithAggregatesFilter<$PrismaModel> | $Enums.ShapeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShapeTypeFilter<$PrismaModel>
    _max?: NestedEnumShapeTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NotificationTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationTokenCreateWithoutUserInput, NotificationTokenUncheckedCreateWithoutUserInput> | NotificationTokenCreateWithoutUserInput[] | NotificationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationTokenCreateOrConnectWithoutUserInput | NotificationTokenCreateOrConnectWithoutUserInput[]
    createMany?: NotificationTokenCreateManyUserInputEnvelope
    connect?: NotificationTokenWhereUniqueInput | NotificationTokenWhereUniqueInput[]
  }

  export type NotificationTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationTokenCreateWithoutUserInput, NotificationTokenUncheckedCreateWithoutUserInput> | NotificationTokenCreateWithoutUserInput[] | NotificationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationTokenCreateOrConnectWithoutUserInput | NotificationTokenCreateOrConnectWithoutUserInput[]
    createMany?: NotificationTokenCreateManyUserInputEnvelope
    connect?: NotificationTokenWhereUniqueInput | NotificationTokenWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NotificationTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationTokenCreateWithoutUserInput, NotificationTokenUncheckedCreateWithoutUserInput> | NotificationTokenCreateWithoutUserInput[] | NotificationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationTokenCreateOrConnectWithoutUserInput | NotificationTokenCreateOrConnectWithoutUserInput[]
    upsert?: NotificationTokenUpsertWithWhereUniqueWithoutUserInput | NotificationTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationTokenCreateManyUserInputEnvelope
    set?: NotificationTokenWhereUniqueInput | NotificationTokenWhereUniqueInput[]
    disconnect?: NotificationTokenWhereUniqueInput | NotificationTokenWhereUniqueInput[]
    delete?: NotificationTokenWhereUniqueInput | NotificationTokenWhereUniqueInput[]
    connect?: NotificationTokenWhereUniqueInput | NotificationTokenWhereUniqueInput[]
    update?: NotificationTokenUpdateWithWhereUniqueWithoutUserInput | NotificationTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationTokenUpdateManyWithWhereWithoutUserInput | NotificationTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationTokenScalarWhereInput | NotificationTokenScalarWhereInput[]
  }

  export type NotificationTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationTokenCreateWithoutUserInput, NotificationTokenUncheckedCreateWithoutUserInput> | NotificationTokenCreateWithoutUserInput[] | NotificationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationTokenCreateOrConnectWithoutUserInput | NotificationTokenCreateOrConnectWithoutUserInput[]
    upsert?: NotificationTokenUpsertWithWhereUniqueWithoutUserInput | NotificationTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationTokenCreateManyUserInputEnvelope
    set?: NotificationTokenWhereUniqueInput | NotificationTokenWhereUniqueInput[]
    disconnect?: NotificationTokenWhereUniqueInput | NotificationTokenWhereUniqueInput[]
    delete?: NotificationTokenWhereUniqueInput | NotificationTokenWhereUniqueInput[]
    connect?: NotificationTokenWhereUniqueInput | NotificationTokenWhereUniqueInput[]
    update?: NotificationTokenUpdateWithWhereUniqueWithoutUserInput | NotificationTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationTokenUpdateManyWithWhereWithoutUserInput | NotificationTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationTokenScalarWhereInput | NotificationTokenScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTokensInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutTokensNestedInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    upsert?: UserUpsertWithoutTokensInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTokensInput, UserUpdateWithoutTokensInput>, UserUncheckedUpdateWithoutTokensInput>
  }

  export type EnumFloorFieldUpdateOperationsInput = {
    set?: $Enums.Floor
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumShapeTypeFieldUpdateOperationsInput = {
    set?: $Enums.ShapeType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumFloorFilter<$PrismaModel = never> = {
    equals?: $Enums.Floor | EnumFloorFieldRefInput<$PrismaModel>
    in?: $Enums.Floor[] | ListEnumFloorFieldRefInput<$PrismaModel>
    notIn?: $Enums.Floor[] | ListEnumFloorFieldRefInput<$PrismaModel>
    not?: NestedEnumFloorFilter<$PrismaModel> | $Enums.Floor
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumFloorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Floor | EnumFloorFieldRefInput<$PrismaModel>
    in?: $Enums.Floor[] | ListEnumFloorFieldRefInput<$PrismaModel>
    notIn?: $Enums.Floor[] | ListEnumFloorFieldRefInput<$PrismaModel>
    not?: NestedEnumFloorWithAggregatesFilter<$PrismaModel> | $Enums.Floor
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFloorFilter<$PrismaModel>
    _max?: NestedEnumFloorFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumShapeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ShapeType | EnumShapeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ShapeType[] | ListEnumShapeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShapeType[] | ListEnumShapeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumShapeTypeFilter<$PrismaModel> | $Enums.ShapeType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumShapeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShapeType | EnumShapeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ShapeType[] | ListEnumShapeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShapeType[] | ListEnumShapeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumShapeTypeWithAggregatesFilter<$PrismaModel> | $Enums.ShapeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShapeTypeFilter<$PrismaModel>
    _max?: NestedEnumShapeTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NotificationTokenCreateWithoutUserInput = {
    id?: string
    token: string
    createdAt?: Date | string
  }

  export type NotificationTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    createdAt?: Date | string
  }

  export type NotificationTokenCreateOrConnectWithoutUserInput = {
    where: NotificationTokenWhereUniqueInput
    create: XOR<NotificationTokenCreateWithoutUserInput, NotificationTokenUncheckedCreateWithoutUserInput>
  }

  export type NotificationTokenCreateManyUserInputEnvelope = {
    data: NotificationTokenCreateManyUserInput | NotificationTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationTokenWhereUniqueInput
    update: XOR<NotificationTokenUpdateWithoutUserInput, NotificationTokenUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationTokenCreateWithoutUserInput, NotificationTokenUncheckedCreateWithoutUserInput>
  }

  export type NotificationTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationTokenWhereUniqueInput
    data: XOR<NotificationTokenUpdateWithoutUserInput, NotificationTokenUncheckedUpdateWithoutUserInput>
  }

  export type NotificationTokenUpdateManyWithWhereWithoutUserInput = {
    where: NotificationTokenScalarWhereInput
    data: XOR<NotificationTokenUpdateManyMutationInput, NotificationTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationTokenScalarWhereInput = {
    AND?: NotificationTokenScalarWhereInput | NotificationTokenScalarWhereInput[]
    OR?: NotificationTokenScalarWhereInput[]
    NOT?: NotificationTokenScalarWhereInput | NotificationTokenScalarWhereInput[]
    id?: StringFilter<"NotificationToken"> | string
    token?: StringFilter<"NotificationToken"> | string
    userId?: StringNullableFilter<"NotificationToken"> | string | null
    createdAt?: DateTimeFilter<"NotificationToken"> | Date | string
  }

  export type UserCreateWithoutTokensInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutTokensInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
  }

  export type UserUpsertWithoutTokensInput = {
    update: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
  }

  export type UserUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationTokenCreateManyUserInput = {
    id?: string
    token: string
    createdAt?: Date | string
  }

  export type NotificationTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}