
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
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Business
 * 
 */
export type Business = $Result.DefaultSelection<Prisma.$BusinessPayload>
/**
 * Model BusinessMedia
 * 
 */
export type BusinessMedia = $Result.DefaultSelection<Prisma.$BusinessMediaPayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model BusinessBooking
 * 
 */
export type BusinessBooking = $Result.DefaultSelection<Prisma.$BusinessBookingPayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model Visitor
 * 
 */
export type Visitor = $Result.DefaultSelection<Prisma.$VisitorPayload>
/**
 * Model VisitorBusinessView
 * 
 */
export type VisitorBusinessView = $Result.DefaultSelection<Prisma.$VisitorBusinessViewPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
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
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
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
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.business`: Exposes CRUD operations for the **Business** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Businesses
    * const businesses = await prisma.business.findMany()
    * ```
    */
  get business(): Prisma.BusinessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.businessMedia`: Exposes CRUD operations for the **BusinessMedia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessMedias
    * const businessMedias = await prisma.businessMedia.findMany()
    * ```
    */
  get businessMedia(): Prisma.BusinessMediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.businessBooking`: Exposes CRUD operations for the **BusinessBooking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessBookings
    * const businessBookings = await prisma.businessBooking.findMany()
    * ```
    */
  get businessBooking(): Prisma.BusinessBookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visitor`: Exposes CRUD operations for the **Visitor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Visitors
    * const visitors = await prisma.visitor.findMany()
    * ```
    */
  get visitor(): Prisma.VisitorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visitorBusinessView`: Exposes CRUD operations for the **VisitorBusinessView** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VisitorBusinessViews
    * const visitorBusinessViews = await prisma.visitorBusinessView.findMany()
    * ```
    */
  get visitorBusinessView(): Prisma.VisitorBusinessViewDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.1
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
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
    Category: 'Category',
    Business: 'Business',
    BusinessMedia: 'BusinessMedia',
    Address: 'Address',
    User: 'User',
    Review: 'Review',
    BusinessBooking: 'BusinessBooking',
    Location: 'Location',
    Visitor: 'Visitor',
    VisitorBusinessView: 'VisitorBusinessView'
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
      modelProps: "category" | "business" | "businessMedia" | "address" | "user" | "review" | "businessBooking" | "location" | "visitor" | "visitorBusinessView"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Business: {
        payload: Prisma.$BusinessPayload<ExtArgs>
        fields: Prisma.BusinessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          findFirst: {
            args: Prisma.BusinessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          findMany: {
            args: Prisma.BusinessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[]
          }
          create: {
            args: Prisma.BusinessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          createMany: {
            args: Prisma.BusinessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusinessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[]
          }
          delete: {
            args: Prisma.BusinessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          update: {
            args: Prisma.BusinessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          deleteMany: {
            args: Prisma.BusinessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusinessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[]
          }
          upsert: {
            args: Prisma.BusinessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          aggregate: {
            args: Prisma.BusinessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusiness>
          }
          groupBy: {
            args: Prisma.BusinessGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessCountAggregateOutputType> | number
          }
        }
      }
      BusinessMedia: {
        payload: Prisma.$BusinessMediaPayload<ExtArgs>
        fields: Prisma.BusinessMediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessMediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessMediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessMediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessMediaPayload>
          }
          findFirst: {
            args: Prisma.BusinessMediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessMediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessMediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessMediaPayload>
          }
          findMany: {
            args: Prisma.BusinessMediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessMediaPayload>[]
          }
          create: {
            args: Prisma.BusinessMediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessMediaPayload>
          }
          createMany: {
            args: Prisma.BusinessMediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusinessMediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessMediaPayload>[]
          }
          delete: {
            args: Prisma.BusinessMediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessMediaPayload>
          }
          update: {
            args: Prisma.BusinessMediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessMediaPayload>
          }
          deleteMany: {
            args: Prisma.BusinessMediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessMediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusinessMediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessMediaPayload>[]
          }
          upsert: {
            args: Prisma.BusinessMediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessMediaPayload>
          }
          aggregate: {
            args: Prisma.BusinessMediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusinessMedia>
          }
          groupBy: {
            args: Prisma.BusinessMediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessMediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessMediaCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessMediaCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
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
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      BusinessBooking: {
        payload: Prisma.$BusinessBookingPayload<ExtArgs>
        fields: Prisma.BusinessBookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessBookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessBookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessBookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessBookingPayload>
          }
          findFirst: {
            args: Prisma.BusinessBookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessBookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessBookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessBookingPayload>
          }
          findMany: {
            args: Prisma.BusinessBookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessBookingPayload>[]
          }
          create: {
            args: Prisma.BusinessBookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessBookingPayload>
          }
          createMany: {
            args: Prisma.BusinessBookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusinessBookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessBookingPayload>[]
          }
          delete: {
            args: Prisma.BusinessBookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessBookingPayload>
          }
          update: {
            args: Prisma.BusinessBookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessBookingPayload>
          }
          deleteMany: {
            args: Prisma.BusinessBookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessBookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusinessBookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessBookingPayload>[]
          }
          upsert: {
            args: Prisma.BusinessBookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessBookingPayload>
          }
          aggregate: {
            args: Prisma.BusinessBookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusinessBooking>
          }
          groupBy: {
            args: Prisma.BusinessBookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessBookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessBookingCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessBookingCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      Visitor: {
        payload: Prisma.$VisitorPayload<ExtArgs>
        fields: Prisma.VisitorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisitorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisitorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          findFirst: {
            args: Prisma.VisitorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisitorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          findMany: {
            args: Prisma.VisitorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>[]
          }
          create: {
            args: Prisma.VisitorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          createMany: {
            args: Prisma.VisitorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VisitorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>[]
          }
          delete: {
            args: Prisma.VisitorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          update: {
            args: Prisma.VisitorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          deleteMany: {
            args: Prisma.VisitorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisitorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VisitorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>[]
          }
          upsert: {
            args: Prisma.VisitorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          aggregate: {
            args: Prisma.VisitorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisitor>
          }
          groupBy: {
            args: Prisma.VisitorGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisitorGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisitorCountArgs<ExtArgs>
            result: $Utils.Optional<VisitorCountAggregateOutputType> | number
          }
        }
      }
      VisitorBusinessView: {
        payload: Prisma.$VisitorBusinessViewPayload<ExtArgs>
        fields: Prisma.VisitorBusinessViewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisitorBusinessViewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorBusinessViewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisitorBusinessViewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorBusinessViewPayload>
          }
          findFirst: {
            args: Prisma.VisitorBusinessViewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorBusinessViewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisitorBusinessViewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorBusinessViewPayload>
          }
          findMany: {
            args: Prisma.VisitorBusinessViewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorBusinessViewPayload>[]
          }
          create: {
            args: Prisma.VisitorBusinessViewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorBusinessViewPayload>
          }
          createMany: {
            args: Prisma.VisitorBusinessViewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VisitorBusinessViewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorBusinessViewPayload>[]
          }
          delete: {
            args: Prisma.VisitorBusinessViewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorBusinessViewPayload>
          }
          update: {
            args: Prisma.VisitorBusinessViewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorBusinessViewPayload>
          }
          deleteMany: {
            args: Prisma.VisitorBusinessViewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisitorBusinessViewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VisitorBusinessViewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorBusinessViewPayload>[]
          }
          upsert: {
            args: Prisma.VisitorBusinessViewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorBusinessViewPayload>
          }
          aggregate: {
            args: Prisma.VisitorBusinessViewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisitorBusinessView>
          }
          groupBy: {
            args: Prisma.VisitorBusinessViewGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisitorBusinessViewGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisitorBusinessViewCountArgs<ExtArgs>
            result: $Utils.Optional<VisitorBusinessViewCountAggregateOutputType> | number
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
    category?: CategoryOmit
    business?: BusinessOmit
    businessMedia?: BusinessMediaOmit
    address?: AddressOmit
    user?: UserOmit
    review?: ReviewOmit
    businessBooking?: BusinessBookingOmit
    location?: LocationOmit
    visitor?: VisitorOmit
    visitorBusinessView?: VisitorBusinessViewOmit
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
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    children: number
    businesses: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | CategoryCountOutputTypeCountChildrenArgs
    businesses?: boolean | CategoryCountOutputTypeCountBusinessesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountBusinessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessWhereInput
  }


  /**
   * Count Type BusinessCountOutputType
   */

  export type BusinessCountOutputType = {
    bookings: number
    medias: number
    Review: number
    views: number
  }

  export type BusinessCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | BusinessCountOutputTypeCountBookingsArgs
    medias?: boolean | BusinessCountOutputTypeCountMediasArgs
    Review?: boolean | BusinessCountOutputTypeCountReviewArgs
    views?: boolean | BusinessCountOutputTypeCountViewsArgs
  }

  // Custom InputTypes
  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCountOutputType
     */
    select?: BusinessCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessBookingWhereInput
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountMediasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessMediaWhereInput
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitorBusinessViewWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    businesses: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    businesses?: boolean | UserCountOutputTypeCountBusinessesArgs
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
  export type UserCountOutputTypeCountBusinessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessWhereInput
  }


  /**
   * Count Type VisitorCountOutputType
   */

  export type VisitorCountOutputType = {
    views: number
  }

  export type VisitorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    views?: boolean | VisitorCountOutputTypeCountViewsArgs
  }

  // Custom InputTypes
  /**
   * VisitorCountOutputType without action
   */
  export type VisitorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorCountOutputType
     */
    select?: VisitorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VisitorCountOutputType without action
   */
  export type VisitorCountOutputTypeCountViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitorBusinessViewWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
    parentId: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
    parentId: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    parentId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    parentId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    parentId: number
    createdAt: number
    updatedAt: number
    status: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
    parentId?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
    parentId?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    parentId: number | null
    createdAt: Date
    updatedAt: Date
    status: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    parent?: boolean | Category$parentArgs<ExtArgs>
    children?: boolean | Category$childrenArgs<ExtArgs>
    businesses?: boolean | Category$businessesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    parent?: boolean | Category$parentArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    parent?: boolean | Category$parentArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "parentId" | "createdAt" | "updatedAt" | "status", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Category$parentArgs<ExtArgs>
    children?: boolean | Category$childrenArgs<ExtArgs>
    businesses?: boolean | Category$businessesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Category$parentArgs<ExtArgs>
  }
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Category$parentArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      parent: Prisma.$CategoryPayload<ExtArgs> | null
      children: Prisma.$CategoryPayload<ExtArgs>[]
      businesses: Prisma.$BusinessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      parentId: number | null
      createdAt: Date
      updatedAt: Date
      status: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends Category$parentArgs<ExtArgs> = {}>(args?: Subset<T, Category$parentArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends Category$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Category$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    businesses<T extends Category$businessesArgs<ExtArgs> = {}>(args?: Subset<T, Category$businessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly parentId: FieldRef<"Category", 'Int'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
    readonly status: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.parent
   */
  export type Category$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Category.children
   */
  export type Category$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category.businesses
   */
  export type Category$businessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    where?: BusinessWhereInput
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    cursor?: BusinessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Business
   */

  export type AggregateBusiness = {
    _count: BusinessCountAggregateOutputType | null
    _avg: BusinessAvgAggregateOutputType | null
    _sum: BusinessSumAggregateOutputType | null
    _min: BusinessMinAggregateOutputType | null
    _max: BusinessMaxAggregateOutputType | null
  }

  export type BusinessAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
    ownerId: number | null
    addressId: number | null
  }

  export type BusinessSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
    ownerId: number | null
    addressId: number | null
  }

  export type BusinessMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    phoneNumber: string | null
    email: string | null
    website: string | null
    logoUrl: string | null
    categoryId: number | null
    ownerId: number | null
    addressId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
  }

  export type BusinessMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    phoneNumber: string | null
    email: string | null
    website: string | null
    logoUrl: string | null
    categoryId: number | null
    ownerId: number | null
    addressId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
  }

  export type BusinessCountAggregateOutputType = {
    id: number
    name: number
    description: number
    phoneNumber: number
    email: number
    website: number
    logoUrl: number
    categoryId: number
    ownerId: number
    addressId: number
    createdAt: number
    updatedAt: number
    status: number
    _all: number
  }


  export type BusinessAvgAggregateInputType = {
    id?: true
    categoryId?: true
    ownerId?: true
    addressId?: true
  }

  export type BusinessSumAggregateInputType = {
    id?: true
    categoryId?: true
    ownerId?: true
    addressId?: true
  }

  export type BusinessMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    phoneNumber?: true
    email?: true
    website?: true
    logoUrl?: true
    categoryId?: true
    ownerId?: true
    addressId?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type BusinessMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    phoneNumber?: true
    email?: true
    website?: true
    logoUrl?: true
    categoryId?: true
    ownerId?: true
    addressId?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type BusinessCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    phoneNumber?: true
    email?: true
    website?: true
    logoUrl?: true
    categoryId?: true
    ownerId?: true
    addressId?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    _all?: true
  }

  export type BusinessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Business to aggregate.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Businesses
    **/
    _count?: true | BusinessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusinessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusinessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessMaxAggregateInputType
  }

  export type GetBusinessAggregateType<T extends BusinessAggregateArgs> = {
        [P in keyof T & keyof AggregateBusiness]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusiness[P]>
      : GetScalarType<T[P], AggregateBusiness[P]>
  }




  export type BusinessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessWhereInput
    orderBy?: BusinessOrderByWithAggregationInput | BusinessOrderByWithAggregationInput[]
    by: BusinessScalarFieldEnum[] | BusinessScalarFieldEnum
    having?: BusinessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessCountAggregateInputType | true
    _avg?: BusinessAvgAggregateInputType
    _sum?: BusinessSumAggregateInputType
    _min?: BusinessMinAggregateInputType
    _max?: BusinessMaxAggregateInputType
  }

  export type BusinessGroupByOutputType = {
    id: number
    name: string
    description: string
    phoneNumber: string
    email: string
    website: string | null
    logoUrl: string | null
    categoryId: number
    ownerId: number
    addressId: number
    createdAt: Date
    updatedAt: Date
    status: string
    _count: BusinessCountAggregateOutputType | null
    _avg: BusinessAvgAggregateOutputType | null
    _sum: BusinessSumAggregateOutputType | null
    _min: BusinessMinAggregateOutputType | null
    _max: BusinessMaxAggregateOutputType | null
  }

  type GetBusinessGroupByPayload<T extends BusinessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessGroupByOutputType[P]>
        }
      >
    >


  export type BusinessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    phoneNumber?: boolean
    email?: boolean
    website?: boolean
    logoUrl?: boolean
    categoryId?: boolean
    ownerId?: boolean
    addressId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    address?: boolean | AddressDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    bookings?: boolean | Business$bookingsArgs<ExtArgs>
    medias?: boolean | Business$mediasArgs<ExtArgs>
    Review?: boolean | Business$ReviewArgs<ExtArgs>
    views?: boolean | Business$viewsArgs<ExtArgs>
    _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["business"]>

  export type BusinessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    phoneNumber?: boolean
    email?: boolean
    website?: boolean
    logoUrl?: boolean
    categoryId?: boolean
    ownerId?: boolean
    addressId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    address?: boolean | AddressDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["business"]>

  export type BusinessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    phoneNumber?: boolean
    email?: boolean
    website?: boolean
    logoUrl?: boolean
    categoryId?: boolean
    ownerId?: boolean
    addressId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    address?: boolean | AddressDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["business"]>

  export type BusinessSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    phoneNumber?: boolean
    email?: boolean
    website?: boolean
    logoUrl?: boolean
    categoryId?: boolean
    ownerId?: boolean
    addressId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }

  export type BusinessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "phoneNumber" | "email" | "website" | "logoUrl" | "categoryId" | "ownerId" | "addressId" | "createdAt" | "updatedAt" | "status", ExtArgs["result"]["business"]>
  export type BusinessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | AddressDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    bookings?: boolean | Business$bookingsArgs<ExtArgs>
    medias?: boolean | Business$mediasArgs<ExtArgs>
    Review?: boolean | Business$ReviewArgs<ExtArgs>
    views?: boolean | Business$viewsArgs<ExtArgs>
    _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BusinessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | AddressDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BusinessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | AddressDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BusinessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Business"
    objects: {
      address: Prisma.$AddressPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
      owner: Prisma.$UserPayload<ExtArgs>
      bookings: Prisma.$BusinessBookingPayload<ExtArgs>[]
      medias: Prisma.$BusinessMediaPayload<ExtArgs>[]
      Review: Prisma.$ReviewPayload<ExtArgs>[]
      views: Prisma.$VisitorBusinessViewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      phoneNumber: string
      email: string
      website: string | null
      logoUrl: string | null
      categoryId: number
      ownerId: number
      addressId: number
      createdAt: Date
      updatedAt: Date
      status: string
    }, ExtArgs["result"]["business"]>
    composites: {}
  }

  type BusinessGetPayload<S extends boolean | null | undefined | BusinessDefaultArgs> = $Result.GetResult<Prisma.$BusinessPayload, S>

  type BusinessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessCountAggregateInputType | true
    }

  export interface BusinessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Business'], meta: { name: 'Business' } }
    /**
     * Find zero or one Business that matches the filter.
     * @param {BusinessFindUniqueArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessFindUniqueArgs>(args: SelectSubset<T, BusinessFindUniqueArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Business that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessFindUniqueOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Business that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindFirstArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessFindFirstArgs>(args?: SelectSubset<T, BusinessFindFirstArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Business that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindFirstOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Businesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Businesses
     * const businesses = await prisma.business.findMany()
     * 
     * // Get first 10 Businesses
     * const businesses = await prisma.business.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessWithIdOnly = await prisma.business.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessFindManyArgs>(args?: SelectSubset<T, BusinessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Business.
     * @param {BusinessCreateArgs} args - Arguments to create a Business.
     * @example
     * // Create one Business
     * const Business = await prisma.business.create({
     *   data: {
     *     // ... data to create a Business
     *   }
     * })
     * 
     */
    create<T extends BusinessCreateArgs>(args: SelectSubset<T, BusinessCreateArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Businesses.
     * @param {BusinessCreateManyArgs} args - Arguments to create many Businesses.
     * @example
     * // Create many Businesses
     * const business = await prisma.business.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessCreateManyArgs>(args?: SelectSubset<T, BusinessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Businesses and returns the data saved in the database.
     * @param {BusinessCreateManyAndReturnArgs} args - Arguments to create many Businesses.
     * @example
     * // Create many Businesses
     * const business = await prisma.business.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Businesses and only return the `id`
     * const businessWithIdOnly = await prisma.business.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusinessCreateManyAndReturnArgs>(args?: SelectSubset<T, BusinessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Business.
     * @param {BusinessDeleteArgs} args - Arguments to delete one Business.
     * @example
     * // Delete one Business
     * const Business = await prisma.business.delete({
     *   where: {
     *     // ... filter to delete one Business
     *   }
     * })
     * 
     */
    delete<T extends BusinessDeleteArgs>(args: SelectSubset<T, BusinessDeleteArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Business.
     * @param {BusinessUpdateArgs} args - Arguments to update one Business.
     * @example
     * // Update one Business
     * const business = await prisma.business.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessUpdateArgs>(args: SelectSubset<T, BusinessUpdateArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Businesses.
     * @param {BusinessDeleteManyArgs} args - Arguments to filter Businesses to delete.
     * @example
     * // Delete a few Businesses
     * const { count } = await prisma.business.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessDeleteManyArgs>(args?: SelectSubset<T, BusinessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Businesses
     * const business = await prisma.business.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessUpdateManyArgs>(args: SelectSubset<T, BusinessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Businesses and returns the data updated in the database.
     * @param {BusinessUpdateManyAndReturnArgs} args - Arguments to update many Businesses.
     * @example
     * // Update many Businesses
     * const business = await prisma.business.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Businesses and only return the `id`
     * const businessWithIdOnly = await prisma.business.updateManyAndReturn({
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
    updateManyAndReturn<T extends BusinessUpdateManyAndReturnArgs>(args: SelectSubset<T, BusinessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Business.
     * @param {BusinessUpsertArgs} args - Arguments to update or create a Business.
     * @example
     * // Update or create a Business
     * const business = await prisma.business.upsert({
     *   create: {
     *     // ... data to create a Business
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Business we want to update
     *   }
     * })
     */
    upsert<T extends BusinessUpsertArgs>(args: SelectSubset<T, BusinessUpsertArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCountArgs} args - Arguments to filter Businesses to count.
     * @example
     * // Count the number of Businesses
     * const count = await prisma.business.count({
     *   where: {
     *     // ... the filter for the Businesses we want to count
     *   }
     * })
    **/
    count<T extends BusinessCountArgs>(
      args?: Subset<T, BusinessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BusinessAggregateArgs>(args: Subset<T, BusinessAggregateArgs>): Prisma.PrismaPromise<GetBusinessAggregateType<T>>

    /**
     * Group by Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessGroupByArgs} args - Group by arguments.
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
      T extends BusinessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessGroupByArgs['orderBy'] }
        : { orderBy?: BusinessGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BusinessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Business model
   */
  readonly fields: BusinessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Business.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    address<T extends AddressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddressDefaultArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookings<T extends Business$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Business$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    medias<T extends Business$mediasArgs<ExtArgs> = {}>(args?: Subset<T, Business$mediasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Review<T extends Business$ReviewArgs<ExtArgs> = {}>(args?: Subset<T, Business$ReviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    views<T extends Business$viewsArgs<ExtArgs> = {}>(args?: Subset<T, Business$viewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorBusinessViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Business model
   */
  interface BusinessFieldRefs {
    readonly id: FieldRef<"Business", 'Int'>
    readonly name: FieldRef<"Business", 'String'>
    readonly description: FieldRef<"Business", 'String'>
    readonly phoneNumber: FieldRef<"Business", 'String'>
    readonly email: FieldRef<"Business", 'String'>
    readonly website: FieldRef<"Business", 'String'>
    readonly logoUrl: FieldRef<"Business", 'String'>
    readonly categoryId: FieldRef<"Business", 'Int'>
    readonly ownerId: FieldRef<"Business", 'Int'>
    readonly addressId: FieldRef<"Business", 'Int'>
    readonly createdAt: FieldRef<"Business", 'DateTime'>
    readonly updatedAt: FieldRef<"Business", 'DateTime'>
    readonly status: FieldRef<"Business", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Business findUnique
   */
  export type BusinessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business findUniqueOrThrow
   */
  export type BusinessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business findFirst
   */
  export type BusinessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business findFirstOrThrow
   */
  export type BusinessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business findMany
   */
  export type BusinessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Businesses to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business create
   */
  export type BusinessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The data needed to create a Business.
     */
    data: XOR<BusinessCreateInput, BusinessUncheckedCreateInput>
  }

  /**
   * Business createMany
   */
  export type BusinessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Businesses.
     */
    data: BusinessCreateManyInput | BusinessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Business createManyAndReturn
   */
  export type BusinessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * The data used to create many Businesses.
     */
    data: BusinessCreateManyInput | BusinessCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Business update
   */
  export type BusinessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The data needed to update a Business.
     */
    data: XOR<BusinessUpdateInput, BusinessUncheckedUpdateInput>
    /**
     * Choose, which Business to update.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business updateMany
   */
  export type BusinessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Businesses.
     */
    data: XOR<BusinessUpdateManyMutationInput, BusinessUncheckedUpdateManyInput>
    /**
     * Filter which Businesses to update
     */
    where?: BusinessWhereInput
    /**
     * Limit how many Businesses to update.
     */
    limit?: number
  }

  /**
   * Business updateManyAndReturn
   */
  export type BusinessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * The data used to update Businesses.
     */
    data: XOR<BusinessUpdateManyMutationInput, BusinessUncheckedUpdateManyInput>
    /**
     * Filter which Businesses to update
     */
    where?: BusinessWhereInput
    /**
     * Limit how many Businesses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Business upsert
   */
  export type BusinessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The filter to search for the Business to update in case it exists.
     */
    where: BusinessWhereUniqueInput
    /**
     * In case the Business found by the `where` argument doesn't exist, create a new Business with this data.
     */
    create: XOR<BusinessCreateInput, BusinessUncheckedCreateInput>
    /**
     * In case the Business was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessUpdateInput, BusinessUncheckedUpdateInput>
  }

  /**
   * Business delete
   */
  export type BusinessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter which Business to delete.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business deleteMany
   */
  export type BusinessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Businesses to delete
     */
    where?: BusinessWhereInput
    /**
     * Limit how many Businesses to delete.
     */
    limit?: number
  }

  /**
   * Business.bookings
   */
  export type Business$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessBooking
     */
    select?: BusinessBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessBooking
     */
    omit?: BusinessBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessBookingInclude<ExtArgs> | null
    where?: BusinessBookingWhereInput
    orderBy?: BusinessBookingOrderByWithRelationInput | BusinessBookingOrderByWithRelationInput[]
    cursor?: BusinessBookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusinessBookingScalarFieldEnum | BusinessBookingScalarFieldEnum[]
  }

  /**
   * Business.medias
   */
  export type Business$mediasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessMedia
     */
    select?: BusinessMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessMedia
     */
    omit?: BusinessMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessMediaInclude<ExtArgs> | null
    where?: BusinessMediaWhereInput
    orderBy?: BusinessMediaOrderByWithRelationInput | BusinessMediaOrderByWithRelationInput[]
    cursor?: BusinessMediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusinessMediaScalarFieldEnum | BusinessMediaScalarFieldEnum[]
  }

  /**
   * Business.Review
   */
  export type Business$ReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Business.views
   */
  export type Business$viewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorBusinessView
     */
    select?: VisitorBusinessViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorBusinessView
     */
    omit?: VisitorBusinessViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorBusinessViewInclude<ExtArgs> | null
    where?: VisitorBusinessViewWhereInput
    orderBy?: VisitorBusinessViewOrderByWithRelationInput | VisitorBusinessViewOrderByWithRelationInput[]
    cursor?: VisitorBusinessViewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisitorBusinessViewScalarFieldEnum | VisitorBusinessViewScalarFieldEnum[]
  }

  /**
   * Business without action
   */
  export type BusinessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
  }


  /**
   * Model BusinessMedia
   */

  export type AggregateBusinessMedia = {
    _count: BusinessMediaCountAggregateOutputType | null
    _avg: BusinessMediaAvgAggregateOutputType | null
    _sum: BusinessMediaSumAggregateOutputType | null
    _min: BusinessMediaMinAggregateOutputType | null
    _max: BusinessMediaMaxAggregateOutputType | null
  }

  export type BusinessMediaAvgAggregateOutputType = {
    id: number | null
    businessId: number | null
  }

  export type BusinessMediaSumAggregateOutputType = {
    id: number | null
    businessId: number | null
  }

  export type BusinessMediaMinAggregateOutputType = {
    id: number | null
    url: string | null
    type: string | null
    businessId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
  }

  export type BusinessMediaMaxAggregateOutputType = {
    id: number | null
    url: string | null
    type: string | null
    businessId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
  }

  export type BusinessMediaCountAggregateOutputType = {
    id: number
    url: number
    type: number
    businessId: number
    createdAt: number
    updatedAt: number
    status: number
    _all: number
  }


  export type BusinessMediaAvgAggregateInputType = {
    id?: true
    businessId?: true
  }

  export type BusinessMediaSumAggregateInputType = {
    id?: true
    businessId?: true
  }

  export type BusinessMediaMinAggregateInputType = {
    id?: true
    url?: true
    type?: true
    businessId?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type BusinessMediaMaxAggregateInputType = {
    id?: true
    url?: true
    type?: true
    businessId?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type BusinessMediaCountAggregateInputType = {
    id?: true
    url?: true
    type?: true
    businessId?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    _all?: true
  }

  export type BusinessMediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessMedia to aggregate.
     */
    where?: BusinessMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessMedias to fetch.
     */
    orderBy?: BusinessMediaOrderByWithRelationInput | BusinessMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusinessMedias
    **/
    _count?: true | BusinessMediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusinessMediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusinessMediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessMediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessMediaMaxAggregateInputType
  }

  export type GetBusinessMediaAggregateType<T extends BusinessMediaAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessMedia[P]>
      : GetScalarType<T[P], AggregateBusinessMedia[P]>
  }




  export type BusinessMediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessMediaWhereInput
    orderBy?: BusinessMediaOrderByWithAggregationInput | BusinessMediaOrderByWithAggregationInput[]
    by: BusinessMediaScalarFieldEnum[] | BusinessMediaScalarFieldEnum
    having?: BusinessMediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessMediaCountAggregateInputType | true
    _avg?: BusinessMediaAvgAggregateInputType
    _sum?: BusinessMediaSumAggregateInputType
    _min?: BusinessMediaMinAggregateInputType
    _max?: BusinessMediaMaxAggregateInputType
  }

  export type BusinessMediaGroupByOutputType = {
    id: number
    url: string
    type: string
    businessId: number
    createdAt: Date
    updatedAt: Date
    status: string
    _count: BusinessMediaCountAggregateOutputType | null
    _avg: BusinessMediaAvgAggregateOutputType | null
    _sum: BusinessMediaSumAggregateOutputType | null
    _min: BusinessMediaMinAggregateOutputType | null
    _max: BusinessMediaMaxAggregateOutputType | null
  }

  type GetBusinessMediaGroupByPayload<T extends BusinessMediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessMediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessMediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessMediaGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessMediaGroupByOutputType[P]>
        }
      >
    >


  export type BusinessMediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    type?: boolean
    businessId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessMedia"]>

  export type BusinessMediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    type?: boolean
    businessId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessMedia"]>

  export type BusinessMediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    type?: boolean
    businessId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessMedia"]>

  export type BusinessMediaSelectScalar = {
    id?: boolean
    url?: boolean
    type?: boolean
    businessId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }

  export type BusinessMediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "type" | "businessId" | "createdAt" | "updatedAt" | "status", ExtArgs["result"]["businessMedia"]>
  export type BusinessMediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }
  export type BusinessMediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }
  export type BusinessMediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }

  export type $BusinessMediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BusinessMedia"
    objects: {
      business: Prisma.$BusinessPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      type: string
      businessId: number
      createdAt: Date
      updatedAt: Date
      status: string
    }, ExtArgs["result"]["businessMedia"]>
    composites: {}
  }

  type BusinessMediaGetPayload<S extends boolean | null | undefined | BusinessMediaDefaultArgs> = $Result.GetResult<Prisma.$BusinessMediaPayload, S>

  type BusinessMediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessMediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessMediaCountAggregateInputType | true
    }

  export interface BusinessMediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BusinessMedia'], meta: { name: 'BusinessMedia' } }
    /**
     * Find zero or one BusinessMedia that matches the filter.
     * @param {BusinessMediaFindUniqueArgs} args - Arguments to find a BusinessMedia
     * @example
     * // Get one BusinessMedia
     * const businessMedia = await prisma.businessMedia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessMediaFindUniqueArgs>(args: SelectSubset<T, BusinessMediaFindUniqueArgs<ExtArgs>>): Prisma__BusinessMediaClient<$Result.GetResult<Prisma.$BusinessMediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BusinessMedia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessMediaFindUniqueOrThrowArgs} args - Arguments to find a BusinessMedia
     * @example
     * // Get one BusinessMedia
     * const businessMedia = await prisma.businessMedia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessMediaFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessMediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessMediaClient<$Result.GetResult<Prisma.$BusinessMediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessMedia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessMediaFindFirstArgs} args - Arguments to find a BusinessMedia
     * @example
     * // Get one BusinessMedia
     * const businessMedia = await prisma.businessMedia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessMediaFindFirstArgs>(args?: SelectSubset<T, BusinessMediaFindFirstArgs<ExtArgs>>): Prisma__BusinessMediaClient<$Result.GetResult<Prisma.$BusinessMediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessMedia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessMediaFindFirstOrThrowArgs} args - Arguments to find a BusinessMedia
     * @example
     * // Get one BusinessMedia
     * const businessMedia = await prisma.businessMedia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessMediaFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessMediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessMediaClient<$Result.GetResult<Prisma.$BusinessMediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BusinessMedias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessMediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessMedias
     * const businessMedias = await prisma.businessMedia.findMany()
     * 
     * // Get first 10 BusinessMedias
     * const businessMedias = await prisma.businessMedia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessMediaWithIdOnly = await prisma.businessMedia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessMediaFindManyArgs>(args?: SelectSubset<T, BusinessMediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BusinessMedia.
     * @param {BusinessMediaCreateArgs} args - Arguments to create a BusinessMedia.
     * @example
     * // Create one BusinessMedia
     * const BusinessMedia = await prisma.businessMedia.create({
     *   data: {
     *     // ... data to create a BusinessMedia
     *   }
     * })
     * 
     */
    create<T extends BusinessMediaCreateArgs>(args: SelectSubset<T, BusinessMediaCreateArgs<ExtArgs>>): Prisma__BusinessMediaClient<$Result.GetResult<Prisma.$BusinessMediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BusinessMedias.
     * @param {BusinessMediaCreateManyArgs} args - Arguments to create many BusinessMedias.
     * @example
     * // Create many BusinessMedias
     * const businessMedia = await prisma.businessMedia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessMediaCreateManyArgs>(args?: SelectSubset<T, BusinessMediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BusinessMedias and returns the data saved in the database.
     * @param {BusinessMediaCreateManyAndReturnArgs} args - Arguments to create many BusinessMedias.
     * @example
     * // Create many BusinessMedias
     * const businessMedia = await prisma.businessMedia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BusinessMedias and only return the `id`
     * const businessMediaWithIdOnly = await prisma.businessMedia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusinessMediaCreateManyAndReturnArgs>(args?: SelectSubset<T, BusinessMediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessMediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BusinessMedia.
     * @param {BusinessMediaDeleteArgs} args - Arguments to delete one BusinessMedia.
     * @example
     * // Delete one BusinessMedia
     * const BusinessMedia = await prisma.businessMedia.delete({
     *   where: {
     *     // ... filter to delete one BusinessMedia
     *   }
     * })
     * 
     */
    delete<T extends BusinessMediaDeleteArgs>(args: SelectSubset<T, BusinessMediaDeleteArgs<ExtArgs>>): Prisma__BusinessMediaClient<$Result.GetResult<Prisma.$BusinessMediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BusinessMedia.
     * @param {BusinessMediaUpdateArgs} args - Arguments to update one BusinessMedia.
     * @example
     * // Update one BusinessMedia
     * const businessMedia = await prisma.businessMedia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessMediaUpdateArgs>(args: SelectSubset<T, BusinessMediaUpdateArgs<ExtArgs>>): Prisma__BusinessMediaClient<$Result.GetResult<Prisma.$BusinessMediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BusinessMedias.
     * @param {BusinessMediaDeleteManyArgs} args - Arguments to filter BusinessMedias to delete.
     * @example
     * // Delete a few BusinessMedias
     * const { count } = await prisma.businessMedia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessMediaDeleteManyArgs>(args?: SelectSubset<T, BusinessMediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessMediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessMedias
     * const businessMedia = await prisma.businessMedia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessMediaUpdateManyArgs>(args: SelectSubset<T, BusinessMediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessMedias and returns the data updated in the database.
     * @param {BusinessMediaUpdateManyAndReturnArgs} args - Arguments to update many BusinessMedias.
     * @example
     * // Update many BusinessMedias
     * const businessMedia = await prisma.businessMedia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BusinessMedias and only return the `id`
     * const businessMediaWithIdOnly = await prisma.businessMedia.updateManyAndReturn({
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
    updateManyAndReturn<T extends BusinessMediaUpdateManyAndReturnArgs>(args: SelectSubset<T, BusinessMediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessMediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BusinessMedia.
     * @param {BusinessMediaUpsertArgs} args - Arguments to update or create a BusinessMedia.
     * @example
     * // Update or create a BusinessMedia
     * const businessMedia = await prisma.businessMedia.upsert({
     *   create: {
     *     // ... data to create a BusinessMedia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessMedia we want to update
     *   }
     * })
     */
    upsert<T extends BusinessMediaUpsertArgs>(args: SelectSubset<T, BusinessMediaUpsertArgs<ExtArgs>>): Prisma__BusinessMediaClient<$Result.GetResult<Prisma.$BusinessMediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BusinessMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessMediaCountArgs} args - Arguments to filter BusinessMedias to count.
     * @example
     * // Count the number of BusinessMedias
     * const count = await prisma.businessMedia.count({
     *   where: {
     *     // ... the filter for the BusinessMedias we want to count
     *   }
     * })
    **/
    count<T extends BusinessMediaCountArgs>(
      args?: Subset<T, BusinessMediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessMediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusinessMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessMediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BusinessMediaAggregateArgs>(args: Subset<T, BusinessMediaAggregateArgs>): Prisma.PrismaPromise<GetBusinessMediaAggregateType<T>>

    /**
     * Group by BusinessMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessMediaGroupByArgs} args - Group by arguments.
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
      T extends BusinessMediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessMediaGroupByArgs['orderBy'] }
        : { orderBy?: BusinessMediaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BusinessMediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BusinessMedia model
   */
  readonly fields: BusinessMediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BusinessMedia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessMediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BusinessMedia model
   */
  interface BusinessMediaFieldRefs {
    readonly id: FieldRef<"BusinessMedia", 'Int'>
    readonly url: FieldRef<"BusinessMedia", 'String'>
    readonly type: FieldRef<"BusinessMedia", 'String'>
    readonly businessId: FieldRef<"BusinessMedia", 'Int'>
    readonly createdAt: FieldRef<"BusinessMedia", 'DateTime'>
    readonly updatedAt: FieldRef<"BusinessMedia", 'DateTime'>
    readonly status: FieldRef<"BusinessMedia", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BusinessMedia findUnique
   */
  export type BusinessMediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessMedia
     */
    select?: BusinessMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessMedia
     */
    omit?: BusinessMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessMediaInclude<ExtArgs> | null
    /**
     * Filter, which BusinessMedia to fetch.
     */
    where: BusinessMediaWhereUniqueInput
  }

  /**
   * BusinessMedia findUniqueOrThrow
   */
  export type BusinessMediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessMedia
     */
    select?: BusinessMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessMedia
     */
    omit?: BusinessMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessMediaInclude<ExtArgs> | null
    /**
     * Filter, which BusinessMedia to fetch.
     */
    where: BusinessMediaWhereUniqueInput
  }

  /**
   * BusinessMedia findFirst
   */
  export type BusinessMediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessMedia
     */
    select?: BusinessMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessMedia
     */
    omit?: BusinessMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessMediaInclude<ExtArgs> | null
    /**
     * Filter, which BusinessMedia to fetch.
     */
    where?: BusinessMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessMedias to fetch.
     */
    orderBy?: BusinessMediaOrderByWithRelationInput | BusinessMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessMedias.
     */
    cursor?: BusinessMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessMedias.
     */
    distinct?: BusinessMediaScalarFieldEnum | BusinessMediaScalarFieldEnum[]
  }

  /**
   * BusinessMedia findFirstOrThrow
   */
  export type BusinessMediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessMedia
     */
    select?: BusinessMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessMedia
     */
    omit?: BusinessMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessMediaInclude<ExtArgs> | null
    /**
     * Filter, which BusinessMedia to fetch.
     */
    where?: BusinessMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessMedias to fetch.
     */
    orderBy?: BusinessMediaOrderByWithRelationInput | BusinessMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessMedias.
     */
    cursor?: BusinessMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessMedias.
     */
    distinct?: BusinessMediaScalarFieldEnum | BusinessMediaScalarFieldEnum[]
  }

  /**
   * BusinessMedia findMany
   */
  export type BusinessMediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessMedia
     */
    select?: BusinessMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessMedia
     */
    omit?: BusinessMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessMediaInclude<ExtArgs> | null
    /**
     * Filter, which BusinessMedias to fetch.
     */
    where?: BusinessMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessMedias to fetch.
     */
    orderBy?: BusinessMediaOrderByWithRelationInput | BusinessMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusinessMedias.
     */
    cursor?: BusinessMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessMedias.
     */
    skip?: number
    distinct?: BusinessMediaScalarFieldEnum | BusinessMediaScalarFieldEnum[]
  }

  /**
   * BusinessMedia create
   */
  export type BusinessMediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessMedia
     */
    select?: BusinessMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessMedia
     */
    omit?: BusinessMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessMediaInclude<ExtArgs> | null
    /**
     * The data needed to create a BusinessMedia.
     */
    data: XOR<BusinessMediaCreateInput, BusinessMediaUncheckedCreateInput>
  }

  /**
   * BusinessMedia createMany
   */
  export type BusinessMediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BusinessMedias.
     */
    data: BusinessMediaCreateManyInput | BusinessMediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BusinessMedia createManyAndReturn
   */
  export type BusinessMediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessMedia
     */
    select?: BusinessMediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessMedia
     */
    omit?: BusinessMediaOmit<ExtArgs> | null
    /**
     * The data used to create many BusinessMedias.
     */
    data: BusinessMediaCreateManyInput | BusinessMediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessMediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BusinessMedia update
   */
  export type BusinessMediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessMedia
     */
    select?: BusinessMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessMedia
     */
    omit?: BusinessMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessMediaInclude<ExtArgs> | null
    /**
     * The data needed to update a BusinessMedia.
     */
    data: XOR<BusinessMediaUpdateInput, BusinessMediaUncheckedUpdateInput>
    /**
     * Choose, which BusinessMedia to update.
     */
    where: BusinessMediaWhereUniqueInput
  }

  /**
   * BusinessMedia updateMany
   */
  export type BusinessMediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BusinessMedias.
     */
    data: XOR<BusinessMediaUpdateManyMutationInput, BusinessMediaUncheckedUpdateManyInput>
    /**
     * Filter which BusinessMedias to update
     */
    where?: BusinessMediaWhereInput
    /**
     * Limit how many BusinessMedias to update.
     */
    limit?: number
  }

  /**
   * BusinessMedia updateManyAndReturn
   */
  export type BusinessMediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessMedia
     */
    select?: BusinessMediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessMedia
     */
    omit?: BusinessMediaOmit<ExtArgs> | null
    /**
     * The data used to update BusinessMedias.
     */
    data: XOR<BusinessMediaUpdateManyMutationInput, BusinessMediaUncheckedUpdateManyInput>
    /**
     * Filter which BusinessMedias to update
     */
    where?: BusinessMediaWhereInput
    /**
     * Limit how many BusinessMedias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessMediaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BusinessMedia upsert
   */
  export type BusinessMediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessMedia
     */
    select?: BusinessMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessMedia
     */
    omit?: BusinessMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessMediaInclude<ExtArgs> | null
    /**
     * The filter to search for the BusinessMedia to update in case it exists.
     */
    where: BusinessMediaWhereUniqueInput
    /**
     * In case the BusinessMedia found by the `where` argument doesn't exist, create a new BusinessMedia with this data.
     */
    create: XOR<BusinessMediaCreateInput, BusinessMediaUncheckedCreateInput>
    /**
     * In case the BusinessMedia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessMediaUpdateInput, BusinessMediaUncheckedUpdateInput>
  }

  /**
   * BusinessMedia delete
   */
  export type BusinessMediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessMedia
     */
    select?: BusinessMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessMedia
     */
    omit?: BusinessMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessMediaInclude<ExtArgs> | null
    /**
     * Filter which BusinessMedia to delete.
     */
    where: BusinessMediaWhereUniqueInput
  }

  /**
   * BusinessMedia deleteMany
   */
  export type BusinessMediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessMedias to delete
     */
    where?: BusinessMediaWhereInput
    /**
     * Limit how many BusinessMedias to delete.
     */
    limit?: number
  }

  /**
   * BusinessMedia without action
   */
  export type BusinessMediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessMedia
     */
    select?: BusinessMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessMedia
     */
    omit?: BusinessMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessMediaInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    id: number | null
    lat: number | null
    lon: number | null
  }

  export type AddressSumAggregateOutputType = {
    id: number | null
    lat: number | null
    lon: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: number | null
    landmark: string | null
    street: string | null
    city: string | null
    state: string | null
    country: string | null
    postalCode: string | null
    lat: number | null
    lon: number | null
    formattedAddress: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
  }

  export type AddressMaxAggregateOutputType = {
    id: number | null
    landmark: string | null
    street: string | null
    city: string | null
    state: string | null
    country: string | null
    postalCode: string | null
    lat: number | null
    lon: number | null
    formattedAddress: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    landmark: number
    street: number
    city: number
    state: number
    country: number
    postalCode: number
    lat: number
    lon: number
    formattedAddress: number
    createdAt: number
    updatedAt: number
    status: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    id?: true
    lat?: true
    lon?: true
  }

  export type AddressSumAggregateInputType = {
    id?: true
    lat?: true
    lon?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    landmark?: true
    street?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    lat?: true
    lon?: true
    formattedAddress?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    landmark?: true
    street?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    lat?: true
    lon?: true
    formattedAddress?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    landmark?: true
    street?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    lat?: true
    lon?: true
    formattedAddress?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: number
    landmark: string | null
    street: string
    city: string
    state: string
    country: string
    postalCode: string
    lat: number | null
    lon: number | null
    formattedAddress: string | null
    createdAt: Date
    updatedAt: Date
    status: string
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    landmark?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    lat?: boolean
    lon?: boolean
    formattedAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    business?: boolean | Address$businessArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    landmark?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    lat?: boolean
    lon?: boolean
    formattedAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    landmark?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    lat?: boolean
    lon?: boolean
    formattedAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    landmark?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    lat?: boolean
    lon?: boolean
    formattedAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "landmark" | "street" | "city" | "state" | "country" | "postalCode" | "lat" | "lon" | "formattedAddress" | "createdAt" | "updatedAt" | "status", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | Address$businessArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      business: Prisma.$BusinessPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      landmark: string | null
      street: string
      city: string
      state: string
      country: string
      postalCode: string
      lat: number | null
      lon: number | null
      formattedAddress: string | null
      createdAt: Date
      updatedAt: Date
      status: string
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
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
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
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
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends Address$businessArgs<ExtArgs> = {}>(args?: Subset<T, Address$businessArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'Int'>
    readonly landmark: FieldRef<"Address", 'String'>
    readonly street: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly state: FieldRef<"Address", 'String'>
    readonly country: FieldRef<"Address", 'String'>
    readonly postalCode: FieldRef<"Address", 'String'>
    readonly lat: FieldRef<"Address", 'Float'>
    readonly lon: FieldRef<"Address", 'Float'>
    readonly formattedAddress: FieldRef<"Address", 'String'>
    readonly createdAt: FieldRef<"Address", 'DateTime'>
    readonly updatedAt: FieldRef<"Address", 'DateTime'>
    readonly status: FieldRef<"Address", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address.business
   */
  export type Address$businessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    where?: BusinessWhereInput
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    phoneNumber: string | null
    password: string | null
    verificationToken: string | null
    otpExpiredAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    phoneNumber: string | null
    password: string | null
    verificationToken: string | null
    otpExpiredAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    phoneNumber: number
    password: number
    verificationToken: number
    otpExpiredAt: number
    createdAt: number
    updatedAt: number
    status: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    phoneNumber?: true
    password?: true
    verificationToken?: true
    otpExpiredAt?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    phoneNumber?: true
    password?: true
    verificationToken?: true
    otpExpiredAt?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    phoneNumber?: true
    password?: true
    verificationToken?: true
    otpExpiredAt?: true
    createdAt?: true
    updatedAt?: true
    status?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    phoneNumber: string
    password: string
    verificationToken: string | null
    otpExpiredAt: Date | null
    createdAt: Date
    updatedAt: Date
    status: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    username?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    verificationToken?: boolean
    otpExpiredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    businesses?: boolean | User$businessesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    verificationToken?: boolean
    otpExpiredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    verificationToken?: boolean
    otpExpiredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    verificationToken?: boolean
    otpExpiredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "phoneNumber" | "password" | "verificationToken" | "otpExpiredAt" | "createdAt" | "updatedAt" | "status", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    businesses?: boolean | User$businessesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      businesses: Prisma.$BusinessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      phoneNumber: string
      password: string
      verificationToken: string | null
      otpExpiredAt: Date | null
      createdAt: Date
      updatedAt: Date
      status: string
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
    businesses<T extends User$businessesArgs<ExtArgs> = {}>(args?: Subset<T, User$businessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly verificationToken: FieldRef<"User", 'String'>
    readonly otpExpiredAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly status: FieldRef<"User", 'String'>
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
   * User.businesses
   */
  export type User$businessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    where?: BusinessWhereInput
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    cursor?: BusinessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
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
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    businessId: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    rating: number | null
    businessId: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    rating: number | null
    comment: string | null
    businessId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    rating: number | null
    comment: string | null
    businessId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    rating: number
    comment: number
    businessId: number
    createdAt: number
    updatedAt: number
    status: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    rating?: true
    businessId?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    rating?: true
    businessId?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    businessId?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    businessId?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    businessId?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    rating: number
    comment: string | null
    businessId: number
    createdAt: Date
    updatedAt: Date
    status: string
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    businessId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    businessId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    businessId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    rating?: boolean
    comment?: boolean
    businessId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rating" | "comment" | "businessId" | "createdAt" | "updatedAt" | "status", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      business: Prisma.$BusinessPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rating: number
      comment: string | null
      businessId: number
      createdAt: Date
      updatedAt: Date
      status: string
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly businessId: FieldRef<"Review", 'Int'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
    readonly status: FieldRef<"Review", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model BusinessBooking
   */

  export type AggregateBusinessBooking = {
    _count: BusinessBookingCountAggregateOutputType | null
    _avg: BusinessBookingAvgAggregateOutputType | null
    _sum: BusinessBookingSumAggregateOutputType | null
    _min: BusinessBookingMinAggregateOutputType | null
    _max: BusinessBookingMaxAggregateOutputType | null
  }

  export type BusinessBookingAvgAggregateOutputType = {
    id: number | null
    businessId: number | null
  }

  export type BusinessBookingSumAggregateOutputType = {
    id: number | null
    businessId: number | null
  }

  export type BusinessBookingMinAggregateOutputType = {
    id: number | null
    businessId: number | null
    bookingStartTime: Date | null
    bookingEndTime: Date | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
  }

  export type BusinessBookingMaxAggregateOutputType = {
    id: number | null
    businessId: number | null
    bookingStartTime: Date | null
    bookingEndTime: Date | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
  }

  export type BusinessBookingCountAggregateOutputType = {
    id: number
    businessId: number
    bookingStartTime: number
    bookingEndTime: number
    description: number
    createdAt: number
    updatedAt: number
    status: number
    _all: number
  }


  export type BusinessBookingAvgAggregateInputType = {
    id?: true
    businessId?: true
  }

  export type BusinessBookingSumAggregateInputType = {
    id?: true
    businessId?: true
  }

  export type BusinessBookingMinAggregateInputType = {
    id?: true
    businessId?: true
    bookingStartTime?: true
    bookingEndTime?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type BusinessBookingMaxAggregateInputType = {
    id?: true
    businessId?: true
    bookingStartTime?: true
    bookingEndTime?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type BusinessBookingCountAggregateInputType = {
    id?: true
    businessId?: true
    bookingStartTime?: true
    bookingEndTime?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    _all?: true
  }

  export type BusinessBookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessBooking to aggregate.
     */
    where?: BusinessBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessBookings to fetch.
     */
    orderBy?: BusinessBookingOrderByWithRelationInput | BusinessBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusinessBookings
    **/
    _count?: true | BusinessBookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusinessBookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusinessBookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessBookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessBookingMaxAggregateInputType
  }

  export type GetBusinessBookingAggregateType<T extends BusinessBookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessBooking[P]>
      : GetScalarType<T[P], AggregateBusinessBooking[P]>
  }




  export type BusinessBookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessBookingWhereInput
    orderBy?: BusinessBookingOrderByWithAggregationInput | BusinessBookingOrderByWithAggregationInput[]
    by: BusinessBookingScalarFieldEnum[] | BusinessBookingScalarFieldEnum
    having?: BusinessBookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessBookingCountAggregateInputType | true
    _avg?: BusinessBookingAvgAggregateInputType
    _sum?: BusinessBookingSumAggregateInputType
    _min?: BusinessBookingMinAggregateInputType
    _max?: BusinessBookingMaxAggregateInputType
  }

  export type BusinessBookingGroupByOutputType = {
    id: number
    businessId: number
    bookingStartTime: Date
    bookingEndTime: Date
    description: string | null
    createdAt: Date
    updatedAt: Date
    status: string
    _count: BusinessBookingCountAggregateOutputType | null
    _avg: BusinessBookingAvgAggregateOutputType | null
    _sum: BusinessBookingSumAggregateOutputType | null
    _min: BusinessBookingMinAggregateOutputType | null
    _max: BusinessBookingMaxAggregateOutputType | null
  }

  type GetBusinessBookingGroupByPayload<T extends BusinessBookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessBookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessBookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessBookingGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessBookingGroupByOutputType[P]>
        }
      >
    >


  export type BusinessBookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    bookingStartTime?: boolean
    bookingEndTime?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessBooking"]>

  export type BusinessBookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    bookingStartTime?: boolean
    bookingEndTime?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessBooking"]>

  export type BusinessBookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    bookingStartTime?: boolean
    bookingEndTime?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessBooking"]>

  export type BusinessBookingSelectScalar = {
    id?: boolean
    businessId?: boolean
    bookingStartTime?: boolean
    bookingEndTime?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }

  export type BusinessBookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "businessId" | "bookingStartTime" | "bookingEndTime" | "description" | "createdAt" | "updatedAt" | "status", ExtArgs["result"]["businessBooking"]>
  export type BusinessBookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }
  export type BusinessBookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }
  export type BusinessBookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }

  export type $BusinessBookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BusinessBooking"
    objects: {
      business: Prisma.$BusinessPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      businessId: number
      bookingStartTime: Date
      bookingEndTime: Date
      description: string | null
      createdAt: Date
      updatedAt: Date
      status: string
    }, ExtArgs["result"]["businessBooking"]>
    composites: {}
  }

  type BusinessBookingGetPayload<S extends boolean | null | undefined | BusinessBookingDefaultArgs> = $Result.GetResult<Prisma.$BusinessBookingPayload, S>

  type BusinessBookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessBookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessBookingCountAggregateInputType | true
    }

  export interface BusinessBookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BusinessBooking'], meta: { name: 'BusinessBooking' } }
    /**
     * Find zero or one BusinessBooking that matches the filter.
     * @param {BusinessBookingFindUniqueArgs} args - Arguments to find a BusinessBooking
     * @example
     * // Get one BusinessBooking
     * const businessBooking = await prisma.businessBooking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessBookingFindUniqueArgs>(args: SelectSubset<T, BusinessBookingFindUniqueArgs<ExtArgs>>): Prisma__BusinessBookingClient<$Result.GetResult<Prisma.$BusinessBookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BusinessBooking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessBookingFindUniqueOrThrowArgs} args - Arguments to find a BusinessBooking
     * @example
     * // Get one BusinessBooking
     * const businessBooking = await prisma.businessBooking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessBookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessBookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessBookingClient<$Result.GetResult<Prisma.$BusinessBookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessBooking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessBookingFindFirstArgs} args - Arguments to find a BusinessBooking
     * @example
     * // Get one BusinessBooking
     * const businessBooking = await prisma.businessBooking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessBookingFindFirstArgs>(args?: SelectSubset<T, BusinessBookingFindFirstArgs<ExtArgs>>): Prisma__BusinessBookingClient<$Result.GetResult<Prisma.$BusinessBookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessBooking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessBookingFindFirstOrThrowArgs} args - Arguments to find a BusinessBooking
     * @example
     * // Get one BusinessBooking
     * const businessBooking = await prisma.businessBooking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessBookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessBookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessBookingClient<$Result.GetResult<Prisma.$BusinessBookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BusinessBookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessBookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessBookings
     * const businessBookings = await prisma.businessBooking.findMany()
     * 
     * // Get first 10 BusinessBookings
     * const businessBookings = await prisma.businessBooking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessBookingWithIdOnly = await prisma.businessBooking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessBookingFindManyArgs>(args?: SelectSubset<T, BusinessBookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BusinessBooking.
     * @param {BusinessBookingCreateArgs} args - Arguments to create a BusinessBooking.
     * @example
     * // Create one BusinessBooking
     * const BusinessBooking = await prisma.businessBooking.create({
     *   data: {
     *     // ... data to create a BusinessBooking
     *   }
     * })
     * 
     */
    create<T extends BusinessBookingCreateArgs>(args: SelectSubset<T, BusinessBookingCreateArgs<ExtArgs>>): Prisma__BusinessBookingClient<$Result.GetResult<Prisma.$BusinessBookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BusinessBookings.
     * @param {BusinessBookingCreateManyArgs} args - Arguments to create many BusinessBookings.
     * @example
     * // Create many BusinessBookings
     * const businessBooking = await prisma.businessBooking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessBookingCreateManyArgs>(args?: SelectSubset<T, BusinessBookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BusinessBookings and returns the data saved in the database.
     * @param {BusinessBookingCreateManyAndReturnArgs} args - Arguments to create many BusinessBookings.
     * @example
     * // Create many BusinessBookings
     * const businessBooking = await prisma.businessBooking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BusinessBookings and only return the `id`
     * const businessBookingWithIdOnly = await prisma.businessBooking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusinessBookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BusinessBookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessBookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BusinessBooking.
     * @param {BusinessBookingDeleteArgs} args - Arguments to delete one BusinessBooking.
     * @example
     * // Delete one BusinessBooking
     * const BusinessBooking = await prisma.businessBooking.delete({
     *   where: {
     *     // ... filter to delete one BusinessBooking
     *   }
     * })
     * 
     */
    delete<T extends BusinessBookingDeleteArgs>(args: SelectSubset<T, BusinessBookingDeleteArgs<ExtArgs>>): Prisma__BusinessBookingClient<$Result.GetResult<Prisma.$BusinessBookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BusinessBooking.
     * @param {BusinessBookingUpdateArgs} args - Arguments to update one BusinessBooking.
     * @example
     * // Update one BusinessBooking
     * const businessBooking = await prisma.businessBooking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessBookingUpdateArgs>(args: SelectSubset<T, BusinessBookingUpdateArgs<ExtArgs>>): Prisma__BusinessBookingClient<$Result.GetResult<Prisma.$BusinessBookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BusinessBookings.
     * @param {BusinessBookingDeleteManyArgs} args - Arguments to filter BusinessBookings to delete.
     * @example
     * // Delete a few BusinessBookings
     * const { count } = await prisma.businessBooking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessBookingDeleteManyArgs>(args?: SelectSubset<T, BusinessBookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessBookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessBookings
     * const businessBooking = await prisma.businessBooking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessBookingUpdateManyArgs>(args: SelectSubset<T, BusinessBookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessBookings and returns the data updated in the database.
     * @param {BusinessBookingUpdateManyAndReturnArgs} args - Arguments to update many BusinessBookings.
     * @example
     * // Update many BusinessBookings
     * const businessBooking = await prisma.businessBooking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BusinessBookings and only return the `id`
     * const businessBookingWithIdOnly = await prisma.businessBooking.updateManyAndReturn({
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
    updateManyAndReturn<T extends BusinessBookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BusinessBookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessBookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BusinessBooking.
     * @param {BusinessBookingUpsertArgs} args - Arguments to update or create a BusinessBooking.
     * @example
     * // Update or create a BusinessBooking
     * const businessBooking = await prisma.businessBooking.upsert({
     *   create: {
     *     // ... data to create a BusinessBooking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessBooking we want to update
     *   }
     * })
     */
    upsert<T extends BusinessBookingUpsertArgs>(args: SelectSubset<T, BusinessBookingUpsertArgs<ExtArgs>>): Prisma__BusinessBookingClient<$Result.GetResult<Prisma.$BusinessBookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BusinessBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessBookingCountArgs} args - Arguments to filter BusinessBookings to count.
     * @example
     * // Count the number of BusinessBookings
     * const count = await prisma.businessBooking.count({
     *   where: {
     *     // ... the filter for the BusinessBookings we want to count
     *   }
     * })
    **/
    count<T extends BusinessBookingCountArgs>(
      args?: Subset<T, BusinessBookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessBookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusinessBooking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessBookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BusinessBookingAggregateArgs>(args: Subset<T, BusinessBookingAggregateArgs>): Prisma.PrismaPromise<GetBusinessBookingAggregateType<T>>

    /**
     * Group by BusinessBooking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessBookingGroupByArgs} args - Group by arguments.
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
      T extends BusinessBookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessBookingGroupByArgs['orderBy'] }
        : { orderBy?: BusinessBookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BusinessBookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BusinessBooking model
   */
  readonly fields: BusinessBookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BusinessBooking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessBookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BusinessBooking model
   */
  interface BusinessBookingFieldRefs {
    readonly id: FieldRef<"BusinessBooking", 'Int'>
    readonly businessId: FieldRef<"BusinessBooking", 'Int'>
    readonly bookingStartTime: FieldRef<"BusinessBooking", 'DateTime'>
    readonly bookingEndTime: FieldRef<"BusinessBooking", 'DateTime'>
    readonly description: FieldRef<"BusinessBooking", 'String'>
    readonly createdAt: FieldRef<"BusinessBooking", 'DateTime'>
    readonly updatedAt: FieldRef<"BusinessBooking", 'DateTime'>
    readonly status: FieldRef<"BusinessBooking", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BusinessBooking findUnique
   */
  export type BusinessBookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessBooking
     */
    select?: BusinessBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessBooking
     */
    omit?: BusinessBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessBookingInclude<ExtArgs> | null
    /**
     * Filter, which BusinessBooking to fetch.
     */
    where: BusinessBookingWhereUniqueInput
  }

  /**
   * BusinessBooking findUniqueOrThrow
   */
  export type BusinessBookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessBooking
     */
    select?: BusinessBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessBooking
     */
    omit?: BusinessBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessBookingInclude<ExtArgs> | null
    /**
     * Filter, which BusinessBooking to fetch.
     */
    where: BusinessBookingWhereUniqueInput
  }

  /**
   * BusinessBooking findFirst
   */
  export type BusinessBookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessBooking
     */
    select?: BusinessBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessBooking
     */
    omit?: BusinessBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessBookingInclude<ExtArgs> | null
    /**
     * Filter, which BusinessBooking to fetch.
     */
    where?: BusinessBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessBookings to fetch.
     */
    orderBy?: BusinessBookingOrderByWithRelationInput | BusinessBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessBookings.
     */
    cursor?: BusinessBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessBookings.
     */
    distinct?: BusinessBookingScalarFieldEnum | BusinessBookingScalarFieldEnum[]
  }

  /**
   * BusinessBooking findFirstOrThrow
   */
  export type BusinessBookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessBooking
     */
    select?: BusinessBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessBooking
     */
    omit?: BusinessBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessBookingInclude<ExtArgs> | null
    /**
     * Filter, which BusinessBooking to fetch.
     */
    where?: BusinessBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessBookings to fetch.
     */
    orderBy?: BusinessBookingOrderByWithRelationInput | BusinessBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessBookings.
     */
    cursor?: BusinessBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessBookings.
     */
    distinct?: BusinessBookingScalarFieldEnum | BusinessBookingScalarFieldEnum[]
  }

  /**
   * BusinessBooking findMany
   */
  export type BusinessBookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessBooking
     */
    select?: BusinessBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessBooking
     */
    omit?: BusinessBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessBookingInclude<ExtArgs> | null
    /**
     * Filter, which BusinessBookings to fetch.
     */
    where?: BusinessBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessBookings to fetch.
     */
    orderBy?: BusinessBookingOrderByWithRelationInput | BusinessBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusinessBookings.
     */
    cursor?: BusinessBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessBookings.
     */
    skip?: number
    distinct?: BusinessBookingScalarFieldEnum | BusinessBookingScalarFieldEnum[]
  }

  /**
   * BusinessBooking create
   */
  export type BusinessBookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessBooking
     */
    select?: BusinessBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessBooking
     */
    omit?: BusinessBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessBookingInclude<ExtArgs> | null
    /**
     * The data needed to create a BusinessBooking.
     */
    data: XOR<BusinessBookingCreateInput, BusinessBookingUncheckedCreateInput>
  }

  /**
   * BusinessBooking createMany
   */
  export type BusinessBookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BusinessBookings.
     */
    data: BusinessBookingCreateManyInput | BusinessBookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BusinessBooking createManyAndReturn
   */
  export type BusinessBookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessBooking
     */
    select?: BusinessBookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessBooking
     */
    omit?: BusinessBookingOmit<ExtArgs> | null
    /**
     * The data used to create many BusinessBookings.
     */
    data: BusinessBookingCreateManyInput | BusinessBookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessBookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BusinessBooking update
   */
  export type BusinessBookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessBooking
     */
    select?: BusinessBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessBooking
     */
    omit?: BusinessBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessBookingInclude<ExtArgs> | null
    /**
     * The data needed to update a BusinessBooking.
     */
    data: XOR<BusinessBookingUpdateInput, BusinessBookingUncheckedUpdateInput>
    /**
     * Choose, which BusinessBooking to update.
     */
    where: BusinessBookingWhereUniqueInput
  }

  /**
   * BusinessBooking updateMany
   */
  export type BusinessBookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BusinessBookings.
     */
    data: XOR<BusinessBookingUpdateManyMutationInput, BusinessBookingUncheckedUpdateManyInput>
    /**
     * Filter which BusinessBookings to update
     */
    where?: BusinessBookingWhereInput
    /**
     * Limit how many BusinessBookings to update.
     */
    limit?: number
  }

  /**
   * BusinessBooking updateManyAndReturn
   */
  export type BusinessBookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessBooking
     */
    select?: BusinessBookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessBooking
     */
    omit?: BusinessBookingOmit<ExtArgs> | null
    /**
     * The data used to update BusinessBookings.
     */
    data: XOR<BusinessBookingUpdateManyMutationInput, BusinessBookingUncheckedUpdateManyInput>
    /**
     * Filter which BusinessBookings to update
     */
    where?: BusinessBookingWhereInput
    /**
     * Limit how many BusinessBookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessBookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BusinessBooking upsert
   */
  export type BusinessBookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessBooking
     */
    select?: BusinessBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessBooking
     */
    omit?: BusinessBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessBookingInclude<ExtArgs> | null
    /**
     * The filter to search for the BusinessBooking to update in case it exists.
     */
    where: BusinessBookingWhereUniqueInput
    /**
     * In case the BusinessBooking found by the `where` argument doesn't exist, create a new BusinessBooking with this data.
     */
    create: XOR<BusinessBookingCreateInput, BusinessBookingUncheckedCreateInput>
    /**
     * In case the BusinessBooking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessBookingUpdateInput, BusinessBookingUncheckedUpdateInput>
  }

  /**
   * BusinessBooking delete
   */
  export type BusinessBookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessBooking
     */
    select?: BusinessBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessBooking
     */
    omit?: BusinessBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessBookingInclude<ExtArgs> | null
    /**
     * Filter which BusinessBooking to delete.
     */
    where: BusinessBookingWhereUniqueInput
  }

  /**
   * BusinessBooking deleteMany
   */
  export type BusinessBookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessBookings to delete
     */
    where?: BusinessBookingWhereInput
    /**
     * Limit how many BusinessBookings to delete.
     */
    limit?: number
  }

  /**
   * BusinessBooking without action
   */
  export type BusinessBookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessBooking
     */
    select?: BusinessBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessBooking
     */
    omit?: BusinessBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessBookingInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationAvgAggregateOutputType = {
    id: number | null
    lat: number | null
    lon: number | null
  }

  export type LocationSumAggregateOutputType = {
    id: number | null
    lat: number | null
    lon: number | null
  }

  export type LocationMinAggregateOutputType = {
    id: number | null
    displayName: string | null
    village: string | null
    block: string | null
    district: string | null
    state: string | null
    pinCode: string | null
    lat: number | null
    lon: number | null
    source: string | null
    apiDisplayName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
  }

  export type LocationMaxAggregateOutputType = {
    id: number | null
    displayName: string | null
    village: string | null
    block: string | null
    district: string | null
    state: string | null
    pinCode: string | null
    lat: number | null
    lon: number | null
    source: string | null
    apiDisplayName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    displayName: number
    village: number
    block: number
    district: number
    state: number
    pinCode: number
    lat: number
    lon: number
    source: number
    apiDisplayName: number
    createdAt: number
    updatedAt: number
    status: number
    _all: number
  }


  export type LocationAvgAggregateInputType = {
    id?: true
    lat?: true
    lon?: true
  }

  export type LocationSumAggregateInputType = {
    id?: true
    lat?: true
    lon?: true
  }

  export type LocationMinAggregateInputType = {
    id?: true
    displayName?: true
    village?: true
    block?: true
    district?: true
    state?: true
    pinCode?: true
    lat?: true
    lon?: true
    source?: true
    apiDisplayName?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    displayName?: true
    village?: true
    block?: true
    district?: true
    state?: true
    pinCode?: true
    lat?: true
    lon?: true
    source?: true
    apiDisplayName?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    displayName?: true
    village?: true
    block?: true
    district?: true
    state?: true
    pinCode?: true
    lat?: true
    lon?: true
    source?: true
    apiDisplayName?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _avg?: LocationAvgAggregateInputType
    _sum?: LocationSumAggregateInputType
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: number
    displayName: string
    village: string | null
    block: string | null
    district: string | null
    state: string | null
    pinCode: string | null
    lat: number | null
    lon: number | null
    source: string | null
    apiDisplayName: string | null
    createdAt: Date
    updatedAt: Date
    status: string
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    displayName?: boolean
    village?: boolean
    block?: boolean
    district?: boolean
    state?: boolean
    pinCode?: boolean
    lat?: boolean
    lon?: boolean
    source?: boolean
    apiDisplayName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    displayName?: boolean
    village?: boolean
    block?: boolean
    district?: boolean
    state?: boolean
    pinCode?: boolean
    lat?: boolean
    lon?: boolean
    source?: boolean
    apiDisplayName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    displayName?: boolean
    village?: boolean
    block?: boolean
    district?: boolean
    state?: boolean
    pinCode?: boolean
    lat?: boolean
    lon?: boolean
    source?: boolean
    apiDisplayName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    displayName?: boolean
    village?: boolean
    block?: boolean
    district?: boolean
    state?: boolean
    pinCode?: boolean
    lat?: boolean
    lon?: boolean
    source?: boolean
    apiDisplayName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "displayName" | "village" | "block" | "district" | "state" | "pinCode" | "lat" | "lon" | "source" | "apiDisplayName" | "createdAt" | "updatedAt" | "status", ExtArgs["result"]["location"]>

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      displayName: string
      village: string | null
      block: string | null
      district: string | null
      state: string | null
      pinCode: string | null
      lat: number | null
      lon: number | null
      source: string | null
      apiDisplayName: string | null
      createdAt: Date
      updatedAt: Date
      status: string
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends LocationCreateArgs>(args: SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCreateManyArgs>(args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {LocationCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.updateManyAndReturn({
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
    updateManyAndReturn<T extends LocationUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends LocationUpsertArgs>(args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
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
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'Int'>
    readonly displayName: FieldRef<"Location", 'String'>
    readonly village: FieldRef<"Location", 'String'>
    readonly block: FieldRef<"Location", 'String'>
    readonly district: FieldRef<"Location", 'String'>
    readonly state: FieldRef<"Location", 'String'>
    readonly pinCode: FieldRef<"Location", 'String'>
    readonly lat: FieldRef<"Location", 'Float'>
    readonly lon: FieldRef<"Location", 'Float'>
    readonly source: FieldRef<"Location", 'String'>
    readonly apiDisplayName: FieldRef<"Location", 'String'>
    readonly createdAt: FieldRef<"Location", 'DateTime'>
    readonly updatedAt: FieldRef<"Location", 'DateTime'>
    readonly status: FieldRef<"Location", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location createManyAndReturn
   */
  export type LocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location updateManyAndReturn
   */
  export type LocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
  }


  /**
   * Model Visitor
   */

  export type AggregateVisitor = {
    _count: VisitorCountAggregateOutputType | null
    _avg: VisitorAvgAggregateOutputType | null
    _sum: VisitorSumAggregateOutputType | null
    _min: VisitorMinAggregateOutputType | null
    _max: VisitorMaxAggregateOutputType | null
  }

  export type VisitorAvgAggregateOutputType = {
    id: number | null
  }

  export type VisitorSumAggregateOutputType = {
    id: number | null
  }

  export type VisitorMinAggregateOutputType = {
    id: number | null
    mobile: string | null
    otp: string | null
    otpExpiredAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
  }

  export type VisitorMaxAggregateOutputType = {
    id: number | null
    mobile: string | null
    otp: string | null
    otpExpiredAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
  }

  export type VisitorCountAggregateOutputType = {
    id: number
    mobile: number
    otp: number
    otpExpiredAt: number
    createdAt: number
    updatedAt: number
    status: number
    _all: number
  }


  export type VisitorAvgAggregateInputType = {
    id?: true
  }

  export type VisitorSumAggregateInputType = {
    id?: true
  }

  export type VisitorMinAggregateInputType = {
    id?: true
    mobile?: true
    otp?: true
    otpExpiredAt?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type VisitorMaxAggregateInputType = {
    id?: true
    mobile?: true
    otp?: true
    otpExpiredAt?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type VisitorCountAggregateInputType = {
    id?: true
    mobile?: true
    otp?: true
    otpExpiredAt?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    _all?: true
  }

  export type VisitorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visitor to aggregate.
     */
    where?: VisitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: VisitorOrderByWithRelationInput | VisitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Visitors
    **/
    _count?: true | VisitorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VisitorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VisitorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisitorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisitorMaxAggregateInputType
  }

  export type GetVisitorAggregateType<T extends VisitorAggregateArgs> = {
        [P in keyof T & keyof AggregateVisitor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisitor[P]>
      : GetScalarType<T[P], AggregateVisitor[P]>
  }




  export type VisitorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitorWhereInput
    orderBy?: VisitorOrderByWithAggregationInput | VisitorOrderByWithAggregationInput[]
    by: VisitorScalarFieldEnum[] | VisitorScalarFieldEnum
    having?: VisitorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisitorCountAggregateInputType | true
    _avg?: VisitorAvgAggregateInputType
    _sum?: VisitorSumAggregateInputType
    _min?: VisitorMinAggregateInputType
    _max?: VisitorMaxAggregateInputType
  }

  export type VisitorGroupByOutputType = {
    id: number
    mobile: string
    otp: string | null
    otpExpiredAt: Date | null
    createdAt: Date
    updatedAt: Date
    status: string
    _count: VisitorCountAggregateOutputType | null
    _avg: VisitorAvgAggregateOutputType | null
    _sum: VisitorSumAggregateOutputType | null
    _min: VisitorMinAggregateOutputType | null
    _max: VisitorMaxAggregateOutputType | null
  }

  type GetVisitorGroupByPayload<T extends VisitorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisitorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisitorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisitorGroupByOutputType[P]>
            : GetScalarType<T[P], VisitorGroupByOutputType[P]>
        }
      >
    >


  export type VisitorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mobile?: boolean
    otp?: boolean
    otpExpiredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    views?: boolean | Visitor$viewsArgs<ExtArgs>
    _count?: boolean | VisitorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visitor"]>

  export type VisitorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mobile?: boolean
    otp?: boolean
    otpExpiredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }, ExtArgs["result"]["visitor"]>

  export type VisitorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mobile?: boolean
    otp?: boolean
    otpExpiredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }, ExtArgs["result"]["visitor"]>

  export type VisitorSelectScalar = {
    id?: boolean
    mobile?: boolean
    otp?: boolean
    otpExpiredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }

  export type VisitorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mobile" | "otp" | "otpExpiredAt" | "createdAt" | "updatedAt" | "status", ExtArgs["result"]["visitor"]>
  export type VisitorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    views?: boolean | Visitor$viewsArgs<ExtArgs>
    _count?: boolean | VisitorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VisitorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VisitorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VisitorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Visitor"
    objects: {
      views: Prisma.$VisitorBusinessViewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mobile: string
      otp: string | null
      otpExpiredAt: Date | null
      createdAt: Date
      updatedAt: Date
      status: string
    }, ExtArgs["result"]["visitor"]>
    composites: {}
  }

  type VisitorGetPayload<S extends boolean | null | undefined | VisitorDefaultArgs> = $Result.GetResult<Prisma.$VisitorPayload, S>

  type VisitorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisitorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisitorCountAggregateInputType | true
    }

  export interface VisitorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Visitor'], meta: { name: 'Visitor' } }
    /**
     * Find zero or one Visitor that matches the filter.
     * @param {VisitorFindUniqueArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisitorFindUniqueArgs>(args: SelectSubset<T, VisitorFindUniqueArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Visitor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisitorFindUniqueOrThrowArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisitorFindUniqueOrThrowArgs>(args: SelectSubset<T, VisitorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visitor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorFindFirstArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisitorFindFirstArgs>(args?: SelectSubset<T, VisitorFindFirstArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visitor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorFindFirstOrThrowArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisitorFindFirstOrThrowArgs>(args?: SelectSubset<T, VisitorFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Visitors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Visitors
     * const visitors = await prisma.visitor.findMany()
     * 
     * // Get first 10 Visitors
     * const visitors = await prisma.visitor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visitorWithIdOnly = await prisma.visitor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VisitorFindManyArgs>(args?: SelectSubset<T, VisitorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Visitor.
     * @param {VisitorCreateArgs} args - Arguments to create a Visitor.
     * @example
     * // Create one Visitor
     * const Visitor = await prisma.visitor.create({
     *   data: {
     *     // ... data to create a Visitor
     *   }
     * })
     * 
     */
    create<T extends VisitorCreateArgs>(args: SelectSubset<T, VisitorCreateArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Visitors.
     * @param {VisitorCreateManyArgs} args - Arguments to create many Visitors.
     * @example
     * // Create many Visitors
     * const visitor = await prisma.visitor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisitorCreateManyArgs>(args?: SelectSubset<T, VisitorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Visitors and returns the data saved in the database.
     * @param {VisitorCreateManyAndReturnArgs} args - Arguments to create many Visitors.
     * @example
     * // Create many Visitors
     * const visitor = await prisma.visitor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Visitors and only return the `id`
     * const visitorWithIdOnly = await prisma.visitor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VisitorCreateManyAndReturnArgs>(args?: SelectSubset<T, VisitorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Visitor.
     * @param {VisitorDeleteArgs} args - Arguments to delete one Visitor.
     * @example
     * // Delete one Visitor
     * const Visitor = await prisma.visitor.delete({
     *   where: {
     *     // ... filter to delete one Visitor
     *   }
     * })
     * 
     */
    delete<T extends VisitorDeleteArgs>(args: SelectSubset<T, VisitorDeleteArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Visitor.
     * @param {VisitorUpdateArgs} args - Arguments to update one Visitor.
     * @example
     * // Update one Visitor
     * const visitor = await prisma.visitor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisitorUpdateArgs>(args: SelectSubset<T, VisitorUpdateArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Visitors.
     * @param {VisitorDeleteManyArgs} args - Arguments to filter Visitors to delete.
     * @example
     * // Delete a few Visitors
     * const { count } = await prisma.visitor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisitorDeleteManyArgs>(args?: SelectSubset<T, VisitorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Visitors
     * const visitor = await prisma.visitor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisitorUpdateManyArgs>(args: SelectSubset<T, VisitorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visitors and returns the data updated in the database.
     * @param {VisitorUpdateManyAndReturnArgs} args - Arguments to update many Visitors.
     * @example
     * // Update many Visitors
     * const visitor = await prisma.visitor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Visitors and only return the `id`
     * const visitorWithIdOnly = await prisma.visitor.updateManyAndReturn({
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
    updateManyAndReturn<T extends VisitorUpdateManyAndReturnArgs>(args: SelectSubset<T, VisitorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Visitor.
     * @param {VisitorUpsertArgs} args - Arguments to update or create a Visitor.
     * @example
     * // Update or create a Visitor
     * const visitor = await prisma.visitor.upsert({
     *   create: {
     *     // ... data to create a Visitor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Visitor we want to update
     *   }
     * })
     */
    upsert<T extends VisitorUpsertArgs>(args: SelectSubset<T, VisitorUpsertArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Visitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorCountArgs} args - Arguments to filter Visitors to count.
     * @example
     * // Count the number of Visitors
     * const count = await prisma.visitor.count({
     *   where: {
     *     // ... the filter for the Visitors we want to count
     *   }
     * })
    **/
    count<T extends VisitorCountArgs>(
      args?: Subset<T, VisitorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisitorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Visitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VisitorAggregateArgs>(args: Subset<T, VisitorAggregateArgs>): Prisma.PrismaPromise<GetVisitorAggregateType<T>>

    /**
     * Group by Visitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorGroupByArgs} args - Group by arguments.
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
      T extends VisitorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisitorGroupByArgs['orderBy'] }
        : { orderBy?: VisitorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VisitorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Visitor model
   */
  readonly fields: VisitorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Visitor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisitorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    views<T extends Visitor$viewsArgs<ExtArgs> = {}>(args?: Subset<T, Visitor$viewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorBusinessViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Visitor model
   */
  interface VisitorFieldRefs {
    readonly id: FieldRef<"Visitor", 'Int'>
    readonly mobile: FieldRef<"Visitor", 'String'>
    readonly otp: FieldRef<"Visitor", 'String'>
    readonly otpExpiredAt: FieldRef<"Visitor", 'DateTime'>
    readonly createdAt: FieldRef<"Visitor", 'DateTime'>
    readonly updatedAt: FieldRef<"Visitor", 'DateTime'>
    readonly status: FieldRef<"Visitor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Visitor findUnique
   */
  export type VisitorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitor to fetch.
     */
    where: VisitorWhereUniqueInput
  }

  /**
   * Visitor findUniqueOrThrow
   */
  export type VisitorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitor to fetch.
     */
    where: VisitorWhereUniqueInput
  }

  /**
   * Visitor findFirst
   */
  export type VisitorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitor to fetch.
     */
    where?: VisitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: VisitorOrderByWithRelationInput | VisitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visitors.
     */
    cursor?: VisitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visitors.
     */
    distinct?: VisitorScalarFieldEnum | VisitorScalarFieldEnum[]
  }

  /**
   * Visitor findFirstOrThrow
   */
  export type VisitorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitor to fetch.
     */
    where?: VisitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: VisitorOrderByWithRelationInput | VisitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visitors.
     */
    cursor?: VisitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visitors.
     */
    distinct?: VisitorScalarFieldEnum | VisitorScalarFieldEnum[]
  }

  /**
   * Visitor findMany
   */
  export type VisitorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitors to fetch.
     */
    where?: VisitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: VisitorOrderByWithRelationInput | VisitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Visitors.
     */
    cursor?: VisitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    distinct?: VisitorScalarFieldEnum | VisitorScalarFieldEnum[]
  }

  /**
   * Visitor create
   */
  export type VisitorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * The data needed to create a Visitor.
     */
    data: XOR<VisitorCreateInput, VisitorUncheckedCreateInput>
  }

  /**
   * Visitor createMany
   */
  export type VisitorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Visitors.
     */
    data: VisitorCreateManyInput | VisitorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Visitor createManyAndReturn
   */
  export type VisitorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * The data used to create many Visitors.
     */
    data: VisitorCreateManyInput | VisitorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Visitor update
   */
  export type VisitorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * The data needed to update a Visitor.
     */
    data: XOR<VisitorUpdateInput, VisitorUncheckedUpdateInput>
    /**
     * Choose, which Visitor to update.
     */
    where: VisitorWhereUniqueInput
  }

  /**
   * Visitor updateMany
   */
  export type VisitorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Visitors.
     */
    data: XOR<VisitorUpdateManyMutationInput, VisitorUncheckedUpdateManyInput>
    /**
     * Filter which Visitors to update
     */
    where?: VisitorWhereInput
    /**
     * Limit how many Visitors to update.
     */
    limit?: number
  }

  /**
   * Visitor updateManyAndReturn
   */
  export type VisitorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * The data used to update Visitors.
     */
    data: XOR<VisitorUpdateManyMutationInput, VisitorUncheckedUpdateManyInput>
    /**
     * Filter which Visitors to update
     */
    where?: VisitorWhereInput
    /**
     * Limit how many Visitors to update.
     */
    limit?: number
  }

  /**
   * Visitor upsert
   */
  export type VisitorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * The filter to search for the Visitor to update in case it exists.
     */
    where: VisitorWhereUniqueInput
    /**
     * In case the Visitor found by the `where` argument doesn't exist, create a new Visitor with this data.
     */
    create: XOR<VisitorCreateInput, VisitorUncheckedCreateInput>
    /**
     * In case the Visitor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisitorUpdateInput, VisitorUncheckedUpdateInput>
  }

  /**
   * Visitor delete
   */
  export type VisitorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter which Visitor to delete.
     */
    where: VisitorWhereUniqueInput
  }

  /**
   * Visitor deleteMany
   */
  export type VisitorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visitors to delete
     */
    where?: VisitorWhereInput
    /**
     * Limit how many Visitors to delete.
     */
    limit?: number
  }

  /**
   * Visitor.views
   */
  export type Visitor$viewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorBusinessView
     */
    select?: VisitorBusinessViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorBusinessView
     */
    omit?: VisitorBusinessViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorBusinessViewInclude<ExtArgs> | null
    where?: VisitorBusinessViewWhereInput
    orderBy?: VisitorBusinessViewOrderByWithRelationInput | VisitorBusinessViewOrderByWithRelationInput[]
    cursor?: VisitorBusinessViewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisitorBusinessViewScalarFieldEnum | VisitorBusinessViewScalarFieldEnum[]
  }

  /**
   * Visitor without action
   */
  export type VisitorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
  }


  /**
   * Model VisitorBusinessView
   */

  export type AggregateVisitorBusinessView = {
    _count: VisitorBusinessViewCountAggregateOutputType | null
    _avg: VisitorBusinessViewAvgAggregateOutputType | null
    _sum: VisitorBusinessViewSumAggregateOutputType | null
    _min: VisitorBusinessViewMinAggregateOutputType | null
    _max: VisitorBusinessViewMaxAggregateOutputType | null
  }

  export type VisitorBusinessViewAvgAggregateOutputType = {
    id: number | null
    visitorId: number | null
    businessId: number | null
  }

  export type VisitorBusinessViewSumAggregateOutputType = {
    id: number | null
    visitorId: number | null
    businessId: number | null
  }

  export type VisitorBusinessViewMinAggregateOutputType = {
    id: number | null
    visitorId: number | null
    businessId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
  }

  export type VisitorBusinessViewMaxAggregateOutputType = {
    id: number | null
    visitorId: number | null
    businessId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
  }

  export type VisitorBusinessViewCountAggregateOutputType = {
    id: number
    visitorId: number
    businessId: number
    createdAt: number
    updatedAt: number
    status: number
    _all: number
  }


  export type VisitorBusinessViewAvgAggregateInputType = {
    id?: true
    visitorId?: true
    businessId?: true
  }

  export type VisitorBusinessViewSumAggregateInputType = {
    id?: true
    visitorId?: true
    businessId?: true
  }

  export type VisitorBusinessViewMinAggregateInputType = {
    id?: true
    visitorId?: true
    businessId?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type VisitorBusinessViewMaxAggregateInputType = {
    id?: true
    visitorId?: true
    businessId?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type VisitorBusinessViewCountAggregateInputType = {
    id?: true
    visitorId?: true
    businessId?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    _all?: true
  }

  export type VisitorBusinessViewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisitorBusinessView to aggregate.
     */
    where?: VisitorBusinessViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitorBusinessViews to fetch.
     */
    orderBy?: VisitorBusinessViewOrderByWithRelationInput | VisitorBusinessViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisitorBusinessViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitorBusinessViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitorBusinessViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VisitorBusinessViews
    **/
    _count?: true | VisitorBusinessViewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VisitorBusinessViewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VisitorBusinessViewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisitorBusinessViewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisitorBusinessViewMaxAggregateInputType
  }

  export type GetVisitorBusinessViewAggregateType<T extends VisitorBusinessViewAggregateArgs> = {
        [P in keyof T & keyof AggregateVisitorBusinessView]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisitorBusinessView[P]>
      : GetScalarType<T[P], AggregateVisitorBusinessView[P]>
  }




  export type VisitorBusinessViewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitorBusinessViewWhereInput
    orderBy?: VisitorBusinessViewOrderByWithAggregationInput | VisitorBusinessViewOrderByWithAggregationInput[]
    by: VisitorBusinessViewScalarFieldEnum[] | VisitorBusinessViewScalarFieldEnum
    having?: VisitorBusinessViewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisitorBusinessViewCountAggregateInputType | true
    _avg?: VisitorBusinessViewAvgAggregateInputType
    _sum?: VisitorBusinessViewSumAggregateInputType
    _min?: VisitorBusinessViewMinAggregateInputType
    _max?: VisitorBusinessViewMaxAggregateInputType
  }

  export type VisitorBusinessViewGroupByOutputType = {
    id: number
    visitorId: number
    businessId: number
    createdAt: Date
    updatedAt: Date
    status: string
    _count: VisitorBusinessViewCountAggregateOutputType | null
    _avg: VisitorBusinessViewAvgAggregateOutputType | null
    _sum: VisitorBusinessViewSumAggregateOutputType | null
    _min: VisitorBusinessViewMinAggregateOutputType | null
    _max: VisitorBusinessViewMaxAggregateOutputType | null
  }

  type GetVisitorBusinessViewGroupByPayload<T extends VisitorBusinessViewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisitorBusinessViewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisitorBusinessViewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisitorBusinessViewGroupByOutputType[P]>
            : GetScalarType<T[P], VisitorBusinessViewGroupByOutputType[P]>
        }
      >
    >


  export type VisitorBusinessViewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    visitorId?: boolean
    businessId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visitorBusinessView"]>

  export type VisitorBusinessViewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    visitorId?: boolean
    businessId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visitorBusinessView"]>

  export type VisitorBusinessViewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    visitorId?: boolean
    businessId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visitorBusinessView"]>

  export type VisitorBusinessViewSelectScalar = {
    id?: boolean
    visitorId?: boolean
    businessId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }

  export type VisitorBusinessViewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "visitorId" | "businessId" | "createdAt" | "updatedAt" | "status", ExtArgs["result"]["visitorBusinessView"]>
  export type VisitorBusinessViewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }
  export type VisitorBusinessViewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }
  export type VisitorBusinessViewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }

  export type $VisitorBusinessViewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VisitorBusinessView"
    objects: {
      visitor: Prisma.$VisitorPayload<ExtArgs>
      business: Prisma.$BusinessPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      visitorId: number
      businessId: number
      createdAt: Date
      updatedAt: Date
      status: string
    }, ExtArgs["result"]["visitorBusinessView"]>
    composites: {}
  }

  type VisitorBusinessViewGetPayload<S extends boolean | null | undefined | VisitorBusinessViewDefaultArgs> = $Result.GetResult<Prisma.$VisitorBusinessViewPayload, S>

  type VisitorBusinessViewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisitorBusinessViewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisitorBusinessViewCountAggregateInputType | true
    }

  export interface VisitorBusinessViewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VisitorBusinessView'], meta: { name: 'VisitorBusinessView' } }
    /**
     * Find zero or one VisitorBusinessView that matches the filter.
     * @param {VisitorBusinessViewFindUniqueArgs} args - Arguments to find a VisitorBusinessView
     * @example
     * // Get one VisitorBusinessView
     * const visitorBusinessView = await prisma.visitorBusinessView.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisitorBusinessViewFindUniqueArgs>(args: SelectSubset<T, VisitorBusinessViewFindUniqueArgs<ExtArgs>>): Prisma__VisitorBusinessViewClient<$Result.GetResult<Prisma.$VisitorBusinessViewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VisitorBusinessView that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisitorBusinessViewFindUniqueOrThrowArgs} args - Arguments to find a VisitorBusinessView
     * @example
     * // Get one VisitorBusinessView
     * const visitorBusinessView = await prisma.visitorBusinessView.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisitorBusinessViewFindUniqueOrThrowArgs>(args: SelectSubset<T, VisitorBusinessViewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisitorBusinessViewClient<$Result.GetResult<Prisma.$VisitorBusinessViewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VisitorBusinessView that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorBusinessViewFindFirstArgs} args - Arguments to find a VisitorBusinessView
     * @example
     * // Get one VisitorBusinessView
     * const visitorBusinessView = await prisma.visitorBusinessView.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisitorBusinessViewFindFirstArgs>(args?: SelectSubset<T, VisitorBusinessViewFindFirstArgs<ExtArgs>>): Prisma__VisitorBusinessViewClient<$Result.GetResult<Prisma.$VisitorBusinessViewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VisitorBusinessView that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorBusinessViewFindFirstOrThrowArgs} args - Arguments to find a VisitorBusinessView
     * @example
     * // Get one VisitorBusinessView
     * const visitorBusinessView = await prisma.visitorBusinessView.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisitorBusinessViewFindFirstOrThrowArgs>(args?: SelectSubset<T, VisitorBusinessViewFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisitorBusinessViewClient<$Result.GetResult<Prisma.$VisitorBusinessViewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VisitorBusinessViews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorBusinessViewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VisitorBusinessViews
     * const visitorBusinessViews = await prisma.visitorBusinessView.findMany()
     * 
     * // Get first 10 VisitorBusinessViews
     * const visitorBusinessViews = await prisma.visitorBusinessView.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visitorBusinessViewWithIdOnly = await prisma.visitorBusinessView.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VisitorBusinessViewFindManyArgs>(args?: SelectSubset<T, VisitorBusinessViewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorBusinessViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VisitorBusinessView.
     * @param {VisitorBusinessViewCreateArgs} args - Arguments to create a VisitorBusinessView.
     * @example
     * // Create one VisitorBusinessView
     * const VisitorBusinessView = await prisma.visitorBusinessView.create({
     *   data: {
     *     // ... data to create a VisitorBusinessView
     *   }
     * })
     * 
     */
    create<T extends VisitorBusinessViewCreateArgs>(args: SelectSubset<T, VisitorBusinessViewCreateArgs<ExtArgs>>): Prisma__VisitorBusinessViewClient<$Result.GetResult<Prisma.$VisitorBusinessViewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VisitorBusinessViews.
     * @param {VisitorBusinessViewCreateManyArgs} args - Arguments to create many VisitorBusinessViews.
     * @example
     * // Create many VisitorBusinessViews
     * const visitorBusinessView = await prisma.visitorBusinessView.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisitorBusinessViewCreateManyArgs>(args?: SelectSubset<T, VisitorBusinessViewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VisitorBusinessViews and returns the data saved in the database.
     * @param {VisitorBusinessViewCreateManyAndReturnArgs} args - Arguments to create many VisitorBusinessViews.
     * @example
     * // Create many VisitorBusinessViews
     * const visitorBusinessView = await prisma.visitorBusinessView.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VisitorBusinessViews and only return the `id`
     * const visitorBusinessViewWithIdOnly = await prisma.visitorBusinessView.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VisitorBusinessViewCreateManyAndReturnArgs>(args?: SelectSubset<T, VisitorBusinessViewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorBusinessViewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VisitorBusinessView.
     * @param {VisitorBusinessViewDeleteArgs} args - Arguments to delete one VisitorBusinessView.
     * @example
     * // Delete one VisitorBusinessView
     * const VisitorBusinessView = await prisma.visitorBusinessView.delete({
     *   where: {
     *     // ... filter to delete one VisitorBusinessView
     *   }
     * })
     * 
     */
    delete<T extends VisitorBusinessViewDeleteArgs>(args: SelectSubset<T, VisitorBusinessViewDeleteArgs<ExtArgs>>): Prisma__VisitorBusinessViewClient<$Result.GetResult<Prisma.$VisitorBusinessViewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VisitorBusinessView.
     * @param {VisitorBusinessViewUpdateArgs} args - Arguments to update one VisitorBusinessView.
     * @example
     * // Update one VisitorBusinessView
     * const visitorBusinessView = await prisma.visitorBusinessView.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisitorBusinessViewUpdateArgs>(args: SelectSubset<T, VisitorBusinessViewUpdateArgs<ExtArgs>>): Prisma__VisitorBusinessViewClient<$Result.GetResult<Prisma.$VisitorBusinessViewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VisitorBusinessViews.
     * @param {VisitorBusinessViewDeleteManyArgs} args - Arguments to filter VisitorBusinessViews to delete.
     * @example
     * // Delete a few VisitorBusinessViews
     * const { count } = await prisma.visitorBusinessView.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisitorBusinessViewDeleteManyArgs>(args?: SelectSubset<T, VisitorBusinessViewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisitorBusinessViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorBusinessViewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VisitorBusinessViews
     * const visitorBusinessView = await prisma.visitorBusinessView.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisitorBusinessViewUpdateManyArgs>(args: SelectSubset<T, VisitorBusinessViewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisitorBusinessViews and returns the data updated in the database.
     * @param {VisitorBusinessViewUpdateManyAndReturnArgs} args - Arguments to update many VisitorBusinessViews.
     * @example
     * // Update many VisitorBusinessViews
     * const visitorBusinessView = await prisma.visitorBusinessView.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VisitorBusinessViews and only return the `id`
     * const visitorBusinessViewWithIdOnly = await prisma.visitorBusinessView.updateManyAndReturn({
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
    updateManyAndReturn<T extends VisitorBusinessViewUpdateManyAndReturnArgs>(args: SelectSubset<T, VisitorBusinessViewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorBusinessViewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VisitorBusinessView.
     * @param {VisitorBusinessViewUpsertArgs} args - Arguments to update or create a VisitorBusinessView.
     * @example
     * // Update or create a VisitorBusinessView
     * const visitorBusinessView = await prisma.visitorBusinessView.upsert({
     *   create: {
     *     // ... data to create a VisitorBusinessView
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VisitorBusinessView we want to update
     *   }
     * })
     */
    upsert<T extends VisitorBusinessViewUpsertArgs>(args: SelectSubset<T, VisitorBusinessViewUpsertArgs<ExtArgs>>): Prisma__VisitorBusinessViewClient<$Result.GetResult<Prisma.$VisitorBusinessViewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VisitorBusinessViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorBusinessViewCountArgs} args - Arguments to filter VisitorBusinessViews to count.
     * @example
     * // Count the number of VisitorBusinessViews
     * const count = await prisma.visitorBusinessView.count({
     *   where: {
     *     // ... the filter for the VisitorBusinessViews we want to count
     *   }
     * })
    **/
    count<T extends VisitorBusinessViewCountArgs>(
      args?: Subset<T, VisitorBusinessViewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisitorBusinessViewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VisitorBusinessView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorBusinessViewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VisitorBusinessViewAggregateArgs>(args: Subset<T, VisitorBusinessViewAggregateArgs>): Prisma.PrismaPromise<GetVisitorBusinessViewAggregateType<T>>

    /**
     * Group by VisitorBusinessView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorBusinessViewGroupByArgs} args - Group by arguments.
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
      T extends VisitorBusinessViewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisitorBusinessViewGroupByArgs['orderBy'] }
        : { orderBy?: VisitorBusinessViewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VisitorBusinessViewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitorBusinessViewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VisitorBusinessView model
   */
  readonly fields: VisitorBusinessViewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VisitorBusinessView.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisitorBusinessViewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    visitor<T extends VisitorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VisitorDefaultArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VisitorBusinessView model
   */
  interface VisitorBusinessViewFieldRefs {
    readonly id: FieldRef<"VisitorBusinessView", 'Int'>
    readonly visitorId: FieldRef<"VisitorBusinessView", 'Int'>
    readonly businessId: FieldRef<"VisitorBusinessView", 'Int'>
    readonly createdAt: FieldRef<"VisitorBusinessView", 'DateTime'>
    readonly updatedAt: FieldRef<"VisitorBusinessView", 'DateTime'>
    readonly status: FieldRef<"VisitorBusinessView", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VisitorBusinessView findUnique
   */
  export type VisitorBusinessViewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorBusinessView
     */
    select?: VisitorBusinessViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorBusinessView
     */
    omit?: VisitorBusinessViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorBusinessViewInclude<ExtArgs> | null
    /**
     * Filter, which VisitorBusinessView to fetch.
     */
    where: VisitorBusinessViewWhereUniqueInput
  }

  /**
   * VisitorBusinessView findUniqueOrThrow
   */
  export type VisitorBusinessViewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorBusinessView
     */
    select?: VisitorBusinessViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorBusinessView
     */
    omit?: VisitorBusinessViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorBusinessViewInclude<ExtArgs> | null
    /**
     * Filter, which VisitorBusinessView to fetch.
     */
    where: VisitorBusinessViewWhereUniqueInput
  }

  /**
   * VisitorBusinessView findFirst
   */
  export type VisitorBusinessViewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorBusinessView
     */
    select?: VisitorBusinessViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorBusinessView
     */
    omit?: VisitorBusinessViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorBusinessViewInclude<ExtArgs> | null
    /**
     * Filter, which VisitorBusinessView to fetch.
     */
    where?: VisitorBusinessViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitorBusinessViews to fetch.
     */
    orderBy?: VisitorBusinessViewOrderByWithRelationInput | VisitorBusinessViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisitorBusinessViews.
     */
    cursor?: VisitorBusinessViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitorBusinessViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitorBusinessViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisitorBusinessViews.
     */
    distinct?: VisitorBusinessViewScalarFieldEnum | VisitorBusinessViewScalarFieldEnum[]
  }

  /**
   * VisitorBusinessView findFirstOrThrow
   */
  export type VisitorBusinessViewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorBusinessView
     */
    select?: VisitorBusinessViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorBusinessView
     */
    omit?: VisitorBusinessViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorBusinessViewInclude<ExtArgs> | null
    /**
     * Filter, which VisitorBusinessView to fetch.
     */
    where?: VisitorBusinessViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitorBusinessViews to fetch.
     */
    orderBy?: VisitorBusinessViewOrderByWithRelationInput | VisitorBusinessViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisitorBusinessViews.
     */
    cursor?: VisitorBusinessViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitorBusinessViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitorBusinessViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisitorBusinessViews.
     */
    distinct?: VisitorBusinessViewScalarFieldEnum | VisitorBusinessViewScalarFieldEnum[]
  }

  /**
   * VisitorBusinessView findMany
   */
  export type VisitorBusinessViewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorBusinessView
     */
    select?: VisitorBusinessViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorBusinessView
     */
    omit?: VisitorBusinessViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorBusinessViewInclude<ExtArgs> | null
    /**
     * Filter, which VisitorBusinessViews to fetch.
     */
    where?: VisitorBusinessViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitorBusinessViews to fetch.
     */
    orderBy?: VisitorBusinessViewOrderByWithRelationInput | VisitorBusinessViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VisitorBusinessViews.
     */
    cursor?: VisitorBusinessViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitorBusinessViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitorBusinessViews.
     */
    skip?: number
    distinct?: VisitorBusinessViewScalarFieldEnum | VisitorBusinessViewScalarFieldEnum[]
  }

  /**
   * VisitorBusinessView create
   */
  export type VisitorBusinessViewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorBusinessView
     */
    select?: VisitorBusinessViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorBusinessView
     */
    omit?: VisitorBusinessViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorBusinessViewInclude<ExtArgs> | null
    /**
     * The data needed to create a VisitorBusinessView.
     */
    data: XOR<VisitorBusinessViewCreateInput, VisitorBusinessViewUncheckedCreateInput>
  }

  /**
   * VisitorBusinessView createMany
   */
  export type VisitorBusinessViewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VisitorBusinessViews.
     */
    data: VisitorBusinessViewCreateManyInput | VisitorBusinessViewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VisitorBusinessView createManyAndReturn
   */
  export type VisitorBusinessViewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorBusinessView
     */
    select?: VisitorBusinessViewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorBusinessView
     */
    omit?: VisitorBusinessViewOmit<ExtArgs> | null
    /**
     * The data used to create many VisitorBusinessViews.
     */
    data: VisitorBusinessViewCreateManyInput | VisitorBusinessViewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorBusinessViewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VisitorBusinessView update
   */
  export type VisitorBusinessViewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorBusinessView
     */
    select?: VisitorBusinessViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorBusinessView
     */
    omit?: VisitorBusinessViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorBusinessViewInclude<ExtArgs> | null
    /**
     * The data needed to update a VisitorBusinessView.
     */
    data: XOR<VisitorBusinessViewUpdateInput, VisitorBusinessViewUncheckedUpdateInput>
    /**
     * Choose, which VisitorBusinessView to update.
     */
    where: VisitorBusinessViewWhereUniqueInput
  }

  /**
   * VisitorBusinessView updateMany
   */
  export type VisitorBusinessViewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VisitorBusinessViews.
     */
    data: XOR<VisitorBusinessViewUpdateManyMutationInput, VisitorBusinessViewUncheckedUpdateManyInput>
    /**
     * Filter which VisitorBusinessViews to update
     */
    where?: VisitorBusinessViewWhereInput
    /**
     * Limit how many VisitorBusinessViews to update.
     */
    limit?: number
  }

  /**
   * VisitorBusinessView updateManyAndReturn
   */
  export type VisitorBusinessViewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorBusinessView
     */
    select?: VisitorBusinessViewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorBusinessView
     */
    omit?: VisitorBusinessViewOmit<ExtArgs> | null
    /**
     * The data used to update VisitorBusinessViews.
     */
    data: XOR<VisitorBusinessViewUpdateManyMutationInput, VisitorBusinessViewUncheckedUpdateManyInput>
    /**
     * Filter which VisitorBusinessViews to update
     */
    where?: VisitorBusinessViewWhereInput
    /**
     * Limit how many VisitorBusinessViews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorBusinessViewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VisitorBusinessView upsert
   */
  export type VisitorBusinessViewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorBusinessView
     */
    select?: VisitorBusinessViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorBusinessView
     */
    omit?: VisitorBusinessViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorBusinessViewInclude<ExtArgs> | null
    /**
     * The filter to search for the VisitorBusinessView to update in case it exists.
     */
    where: VisitorBusinessViewWhereUniqueInput
    /**
     * In case the VisitorBusinessView found by the `where` argument doesn't exist, create a new VisitorBusinessView with this data.
     */
    create: XOR<VisitorBusinessViewCreateInput, VisitorBusinessViewUncheckedCreateInput>
    /**
     * In case the VisitorBusinessView was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisitorBusinessViewUpdateInput, VisitorBusinessViewUncheckedUpdateInput>
  }

  /**
   * VisitorBusinessView delete
   */
  export type VisitorBusinessViewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorBusinessView
     */
    select?: VisitorBusinessViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorBusinessView
     */
    omit?: VisitorBusinessViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorBusinessViewInclude<ExtArgs> | null
    /**
     * Filter which VisitorBusinessView to delete.
     */
    where: VisitorBusinessViewWhereUniqueInput
  }

  /**
   * VisitorBusinessView deleteMany
   */
  export type VisitorBusinessViewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisitorBusinessViews to delete
     */
    where?: VisitorBusinessViewWhereInput
    /**
     * Limit how many VisitorBusinessViews to delete.
     */
    limit?: number
  }

  /**
   * VisitorBusinessView without action
   */
  export type VisitorBusinessViewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorBusinessView
     */
    select?: VisitorBusinessViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorBusinessView
     */
    omit?: VisitorBusinessViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorBusinessViewInclude<ExtArgs> | null
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


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    parentId: 'parentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const BusinessScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    phoneNumber: 'phoneNumber',
    email: 'email',
    website: 'website',
    logoUrl: 'logoUrl',
    categoryId: 'categoryId',
    ownerId: 'ownerId',
    addressId: 'addressId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status'
  };

  export type BusinessScalarFieldEnum = (typeof BusinessScalarFieldEnum)[keyof typeof BusinessScalarFieldEnum]


  export const BusinessMediaScalarFieldEnum: {
    id: 'id',
    url: 'url',
    type: 'type',
    businessId: 'businessId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status'
  };

  export type BusinessMediaScalarFieldEnum = (typeof BusinessMediaScalarFieldEnum)[keyof typeof BusinessMediaScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    landmark: 'landmark',
    street: 'street',
    city: 'city',
    state: 'state',
    country: 'country',
    postalCode: 'postalCode',
    lat: 'lat',
    lon: 'lon',
    formattedAddress: 'formattedAddress',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    phoneNumber: 'phoneNumber',
    password: 'password',
    verificationToken: 'verificationToken',
    otpExpiredAt: 'otpExpiredAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    comment: 'comment',
    businessId: 'businessId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const BusinessBookingScalarFieldEnum: {
    id: 'id',
    businessId: 'businessId',
    bookingStartTime: 'bookingStartTime',
    bookingEndTime: 'bookingEndTime',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status'
  };

  export type BusinessBookingScalarFieldEnum = (typeof BusinessBookingScalarFieldEnum)[keyof typeof BusinessBookingScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    displayName: 'displayName',
    village: 'village',
    block: 'block',
    district: 'district',
    state: 'state',
    pinCode: 'pinCode',
    lat: 'lat',
    lon: 'lon',
    source: 'source',
    apiDisplayName: 'apiDisplayName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const VisitorScalarFieldEnum: {
    id: 'id',
    mobile: 'mobile',
    otp: 'otp',
    otpExpiredAt: 'otpExpiredAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status'
  };

  export type VisitorScalarFieldEnum = (typeof VisitorScalarFieldEnum)[keyof typeof VisitorScalarFieldEnum]


  export const VisitorBusinessViewScalarFieldEnum: {
    id: 'id',
    visitorId: 'visitorId',
    businessId: 'businessId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status'
  };

  export type VisitorBusinessViewScalarFieldEnum = (typeof VisitorBusinessViewScalarFieldEnum)[keyof typeof VisitorBusinessViewScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    parentId?: IntNullableFilter<"Category"> | number | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    status?: StringFilter<"Category"> | string
    parent?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    children?: CategoryListRelationFilter
    businesses?: BusinessListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    parent?: CategoryOrderByWithRelationInput
    children?: CategoryOrderByRelationAggregateInput
    businesses?: BusinessOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    parentId?: IntNullableFilter<"Category"> | number | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    status?: StringFilter<"Category"> | string
    parent?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    children?: CategoryListRelationFilter
    businesses?: BusinessListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    parentId?: IntNullableWithAggregatesFilter<"Category"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    status?: StringWithAggregatesFilter<"Category"> | string
  }

  export type BusinessWhereInput = {
    AND?: BusinessWhereInput | BusinessWhereInput[]
    OR?: BusinessWhereInput[]
    NOT?: BusinessWhereInput | BusinessWhereInput[]
    id?: IntFilter<"Business"> | number
    name?: StringFilter<"Business"> | string
    description?: StringFilter<"Business"> | string
    phoneNumber?: StringFilter<"Business"> | string
    email?: StringFilter<"Business"> | string
    website?: StringNullableFilter<"Business"> | string | null
    logoUrl?: StringNullableFilter<"Business"> | string | null
    categoryId?: IntFilter<"Business"> | number
    ownerId?: IntFilter<"Business"> | number
    addressId?: IntFilter<"Business"> | number
    createdAt?: DateTimeFilter<"Business"> | Date | string
    updatedAt?: DateTimeFilter<"Business"> | Date | string
    status?: StringFilter<"Business"> | string
    address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    bookings?: BusinessBookingListRelationFilter
    medias?: BusinessMediaListRelationFilter
    Review?: ReviewListRelationFilter
    views?: VisitorBusinessViewListRelationFilter
  }

  export type BusinessOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    website?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    ownerId?: SortOrder
    addressId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    address?: AddressOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    owner?: UserOrderByWithRelationInput
    bookings?: BusinessBookingOrderByRelationAggregateInput
    medias?: BusinessMediaOrderByRelationAggregateInput
    Review?: ReviewOrderByRelationAggregateInput
    views?: VisitorBusinessViewOrderByRelationAggregateInput
  }

  export type BusinessWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    addressId?: number
    AND?: BusinessWhereInput | BusinessWhereInput[]
    OR?: BusinessWhereInput[]
    NOT?: BusinessWhereInput | BusinessWhereInput[]
    name?: StringFilter<"Business"> | string
    description?: StringFilter<"Business"> | string
    phoneNumber?: StringFilter<"Business"> | string
    email?: StringFilter<"Business"> | string
    website?: StringNullableFilter<"Business"> | string | null
    logoUrl?: StringNullableFilter<"Business"> | string | null
    categoryId?: IntFilter<"Business"> | number
    ownerId?: IntFilter<"Business"> | number
    createdAt?: DateTimeFilter<"Business"> | Date | string
    updatedAt?: DateTimeFilter<"Business"> | Date | string
    status?: StringFilter<"Business"> | string
    address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    bookings?: BusinessBookingListRelationFilter
    medias?: BusinessMediaListRelationFilter
    Review?: ReviewListRelationFilter
    views?: VisitorBusinessViewListRelationFilter
  }, "id" | "addressId">

  export type BusinessOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    website?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    ownerId?: SortOrder
    addressId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    _count?: BusinessCountOrderByAggregateInput
    _avg?: BusinessAvgOrderByAggregateInput
    _max?: BusinessMaxOrderByAggregateInput
    _min?: BusinessMinOrderByAggregateInput
    _sum?: BusinessSumOrderByAggregateInput
  }

  export type BusinessScalarWhereWithAggregatesInput = {
    AND?: BusinessScalarWhereWithAggregatesInput | BusinessScalarWhereWithAggregatesInput[]
    OR?: BusinessScalarWhereWithAggregatesInput[]
    NOT?: BusinessScalarWhereWithAggregatesInput | BusinessScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Business"> | number
    name?: StringWithAggregatesFilter<"Business"> | string
    description?: StringWithAggregatesFilter<"Business"> | string
    phoneNumber?: StringWithAggregatesFilter<"Business"> | string
    email?: StringWithAggregatesFilter<"Business"> | string
    website?: StringNullableWithAggregatesFilter<"Business"> | string | null
    logoUrl?: StringNullableWithAggregatesFilter<"Business"> | string | null
    categoryId?: IntWithAggregatesFilter<"Business"> | number
    ownerId?: IntWithAggregatesFilter<"Business"> | number
    addressId?: IntWithAggregatesFilter<"Business"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Business"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Business"> | Date | string
    status?: StringWithAggregatesFilter<"Business"> | string
  }

  export type BusinessMediaWhereInput = {
    AND?: BusinessMediaWhereInput | BusinessMediaWhereInput[]
    OR?: BusinessMediaWhereInput[]
    NOT?: BusinessMediaWhereInput | BusinessMediaWhereInput[]
    id?: IntFilter<"BusinessMedia"> | number
    url?: StringFilter<"BusinessMedia"> | string
    type?: StringFilter<"BusinessMedia"> | string
    businessId?: IntFilter<"BusinessMedia"> | number
    createdAt?: DateTimeFilter<"BusinessMedia"> | Date | string
    updatedAt?: DateTimeFilter<"BusinessMedia"> | Date | string
    status?: StringFilter<"BusinessMedia"> | string
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
  }

  export type BusinessMediaOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    businessId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    business?: BusinessOrderByWithRelationInput
  }

  export type BusinessMediaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BusinessMediaWhereInput | BusinessMediaWhereInput[]
    OR?: BusinessMediaWhereInput[]
    NOT?: BusinessMediaWhereInput | BusinessMediaWhereInput[]
    url?: StringFilter<"BusinessMedia"> | string
    type?: StringFilter<"BusinessMedia"> | string
    businessId?: IntFilter<"BusinessMedia"> | number
    createdAt?: DateTimeFilter<"BusinessMedia"> | Date | string
    updatedAt?: DateTimeFilter<"BusinessMedia"> | Date | string
    status?: StringFilter<"BusinessMedia"> | string
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
  }, "id">

  export type BusinessMediaOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    businessId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    _count?: BusinessMediaCountOrderByAggregateInput
    _avg?: BusinessMediaAvgOrderByAggregateInput
    _max?: BusinessMediaMaxOrderByAggregateInput
    _min?: BusinessMediaMinOrderByAggregateInput
    _sum?: BusinessMediaSumOrderByAggregateInput
  }

  export type BusinessMediaScalarWhereWithAggregatesInput = {
    AND?: BusinessMediaScalarWhereWithAggregatesInput | BusinessMediaScalarWhereWithAggregatesInput[]
    OR?: BusinessMediaScalarWhereWithAggregatesInput[]
    NOT?: BusinessMediaScalarWhereWithAggregatesInput | BusinessMediaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BusinessMedia"> | number
    url?: StringWithAggregatesFilter<"BusinessMedia"> | string
    type?: StringWithAggregatesFilter<"BusinessMedia"> | string
    businessId?: IntWithAggregatesFilter<"BusinessMedia"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BusinessMedia"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BusinessMedia"> | Date | string
    status?: StringWithAggregatesFilter<"BusinessMedia"> | string
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: IntFilter<"Address"> | number
    landmark?: StringNullableFilter<"Address"> | string | null
    street?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    state?: StringFilter<"Address"> | string
    country?: StringFilter<"Address"> | string
    postalCode?: StringFilter<"Address"> | string
    lat?: FloatNullableFilter<"Address"> | number | null
    lon?: FloatNullableFilter<"Address"> | number | null
    formattedAddress?: StringNullableFilter<"Address"> | string | null
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
    status?: StringFilter<"Address"> | string
    business?: XOR<BusinessNullableScalarRelationFilter, BusinessWhereInput> | null
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    landmark?: SortOrderInput | SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    lat?: SortOrderInput | SortOrder
    lon?: SortOrderInput | SortOrder
    formattedAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    business?: BusinessOrderByWithRelationInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    landmark?: StringNullableFilter<"Address"> | string | null
    street?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    state?: StringFilter<"Address"> | string
    country?: StringFilter<"Address"> | string
    postalCode?: StringFilter<"Address"> | string
    lat?: FloatNullableFilter<"Address"> | number | null
    lon?: FloatNullableFilter<"Address"> | number | null
    formattedAddress?: StringNullableFilter<"Address"> | string | null
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
    status?: StringFilter<"Address"> | string
    business?: XOR<BusinessNullableScalarRelationFilter, BusinessWhereInput> | null
  }, "id">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    landmark?: SortOrderInput | SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    lat?: SortOrderInput | SortOrder
    lon?: SortOrderInput | SortOrder
    formattedAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Address"> | number
    landmark?: StringNullableWithAggregatesFilter<"Address"> | string | null
    street?: StringWithAggregatesFilter<"Address"> | string
    city?: StringWithAggregatesFilter<"Address"> | string
    state?: StringWithAggregatesFilter<"Address"> | string
    country?: StringWithAggregatesFilter<"Address"> | string
    postalCode?: StringWithAggregatesFilter<"Address"> | string
    lat?: FloatNullableWithAggregatesFilter<"Address"> | number | null
    lon?: FloatNullableWithAggregatesFilter<"Address"> | number | null
    formattedAddress?: StringNullableWithAggregatesFilter<"Address"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Address"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Address"> | Date | string
    status?: StringWithAggregatesFilter<"Address"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    verificationToken?: StringNullableFilter<"User"> | string | null
    otpExpiredAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    status?: StringFilter<"User"> | string
    businesses?: BusinessListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    verificationToken?: SortOrderInput | SortOrder
    otpExpiredAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    businesses?: BusinessOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    phoneNumber?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    verificationToken?: StringNullableFilter<"User"> | string | null
    otpExpiredAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    status?: StringFilter<"User"> | string
    businesses?: BusinessListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    verificationToken?: SortOrderInput | SortOrder
    otpExpiredAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    verificationToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    otpExpiredAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    status?: StringWithAggregatesFilter<"User"> | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    businessId?: IntFilter<"Review"> | number
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    status?: StringFilter<"Review"> | string
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    businessId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    business?: BusinessOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    businessId?: IntFilter<"Review"> | number
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    status?: StringFilter<"Review"> | string
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    businessId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    businessId?: IntWithAggregatesFilter<"Review"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    status?: StringWithAggregatesFilter<"Review"> | string
  }

  export type BusinessBookingWhereInput = {
    AND?: BusinessBookingWhereInput | BusinessBookingWhereInput[]
    OR?: BusinessBookingWhereInput[]
    NOT?: BusinessBookingWhereInput | BusinessBookingWhereInput[]
    id?: IntFilter<"BusinessBooking"> | number
    businessId?: IntFilter<"BusinessBooking"> | number
    bookingStartTime?: DateTimeFilter<"BusinessBooking"> | Date | string
    bookingEndTime?: DateTimeFilter<"BusinessBooking"> | Date | string
    description?: StringNullableFilter<"BusinessBooking"> | string | null
    createdAt?: DateTimeFilter<"BusinessBooking"> | Date | string
    updatedAt?: DateTimeFilter<"BusinessBooking"> | Date | string
    status?: StringFilter<"BusinessBooking"> | string
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
  }

  export type BusinessBookingOrderByWithRelationInput = {
    id?: SortOrder
    businessId?: SortOrder
    bookingStartTime?: SortOrder
    bookingEndTime?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    business?: BusinessOrderByWithRelationInput
  }

  export type BusinessBookingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BusinessBookingWhereInput | BusinessBookingWhereInput[]
    OR?: BusinessBookingWhereInput[]
    NOT?: BusinessBookingWhereInput | BusinessBookingWhereInput[]
    businessId?: IntFilter<"BusinessBooking"> | number
    bookingStartTime?: DateTimeFilter<"BusinessBooking"> | Date | string
    bookingEndTime?: DateTimeFilter<"BusinessBooking"> | Date | string
    description?: StringNullableFilter<"BusinessBooking"> | string | null
    createdAt?: DateTimeFilter<"BusinessBooking"> | Date | string
    updatedAt?: DateTimeFilter<"BusinessBooking"> | Date | string
    status?: StringFilter<"BusinessBooking"> | string
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
  }, "id">

  export type BusinessBookingOrderByWithAggregationInput = {
    id?: SortOrder
    businessId?: SortOrder
    bookingStartTime?: SortOrder
    bookingEndTime?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    _count?: BusinessBookingCountOrderByAggregateInput
    _avg?: BusinessBookingAvgOrderByAggregateInput
    _max?: BusinessBookingMaxOrderByAggregateInput
    _min?: BusinessBookingMinOrderByAggregateInput
    _sum?: BusinessBookingSumOrderByAggregateInput
  }

  export type BusinessBookingScalarWhereWithAggregatesInput = {
    AND?: BusinessBookingScalarWhereWithAggregatesInput | BusinessBookingScalarWhereWithAggregatesInput[]
    OR?: BusinessBookingScalarWhereWithAggregatesInput[]
    NOT?: BusinessBookingScalarWhereWithAggregatesInput | BusinessBookingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BusinessBooking"> | number
    businessId?: IntWithAggregatesFilter<"BusinessBooking"> | number
    bookingStartTime?: DateTimeWithAggregatesFilter<"BusinessBooking"> | Date | string
    bookingEndTime?: DateTimeWithAggregatesFilter<"BusinessBooking"> | Date | string
    description?: StringNullableWithAggregatesFilter<"BusinessBooking"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BusinessBooking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BusinessBooking"> | Date | string
    status?: StringWithAggregatesFilter<"BusinessBooking"> | string
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: IntFilter<"Location"> | number
    displayName?: StringFilter<"Location"> | string
    village?: StringNullableFilter<"Location"> | string | null
    block?: StringNullableFilter<"Location"> | string | null
    district?: StringNullableFilter<"Location"> | string | null
    state?: StringNullableFilter<"Location"> | string | null
    pinCode?: StringNullableFilter<"Location"> | string | null
    lat?: FloatNullableFilter<"Location"> | number | null
    lon?: FloatNullableFilter<"Location"> | number | null
    source?: StringNullableFilter<"Location"> | string | null
    apiDisplayName?: StringNullableFilter<"Location"> | string | null
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
    status?: StringFilter<"Location"> | string
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    displayName?: SortOrder
    village?: SortOrderInput | SortOrder
    block?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    pinCode?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    lon?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    apiDisplayName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    displayName?: StringFilter<"Location"> | string
    village?: StringNullableFilter<"Location"> | string | null
    block?: StringNullableFilter<"Location"> | string | null
    district?: StringNullableFilter<"Location"> | string | null
    state?: StringNullableFilter<"Location"> | string | null
    pinCode?: StringNullableFilter<"Location"> | string | null
    lat?: FloatNullableFilter<"Location"> | number | null
    lon?: FloatNullableFilter<"Location"> | number | null
    source?: StringNullableFilter<"Location"> | string | null
    apiDisplayName?: StringNullableFilter<"Location"> | string | null
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
    status?: StringFilter<"Location"> | string
  }, "id">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    displayName?: SortOrder
    village?: SortOrderInput | SortOrder
    block?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    pinCode?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    lon?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    apiDisplayName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _avg?: LocationAvgOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
    _sum?: LocationSumOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Location"> | number
    displayName?: StringWithAggregatesFilter<"Location"> | string
    village?: StringNullableWithAggregatesFilter<"Location"> | string | null
    block?: StringNullableWithAggregatesFilter<"Location"> | string | null
    district?: StringNullableWithAggregatesFilter<"Location"> | string | null
    state?: StringNullableWithAggregatesFilter<"Location"> | string | null
    pinCode?: StringNullableWithAggregatesFilter<"Location"> | string | null
    lat?: FloatNullableWithAggregatesFilter<"Location"> | number | null
    lon?: FloatNullableWithAggregatesFilter<"Location"> | number | null
    source?: StringNullableWithAggregatesFilter<"Location"> | string | null
    apiDisplayName?: StringNullableWithAggregatesFilter<"Location"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
    status?: StringWithAggregatesFilter<"Location"> | string
  }

  export type VisitorWhereInput = {
    AND?: VisitorWhereInput | VisitorWhereInput[]
    OR?: VisitorWhereInput[]
    NOT?: VisitorWhereInput | VisitorWhereInput[]
    id?: IntFilter<"Visitor"> | number
    mobile?: StringFilter<"Visitor"> | string
    otp?: StringNullableFilter<"Visitor"> | string | null
    otpExpiredAt?: DateTimeNullableFilter<"Visitor"> | Date | string | null
    createdAt?: DateTimeFilter<"Visitor"> | Date | string
    updatedAt?: DateTimeFilter<"Visitor"> | Date | string
    status?: StringFilter<"Visitor"> | string
    views?: VisitorBusinessViewListRelationFilter
  }

  export type VisitorOrderByWithRelationInput = {
    id?: SortOrder
    mobile?: SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpiredAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    views?: VisitorBusinessViewOrderByRelationAggregateInput
  }

  export type VisitorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VisitorWhereInput | VisitorWhereInput[]
    OR?: VisitorWhereInput[]
    NOT?: VisitorWhereInput | VisitorWhereInput[]
    mobile?: StringFilter<"Visitor"> | string
    otp?: StringNullableFilter<"Visitor"> | string | null
    otpExpiredAt?: DateTimeNullableFilter<"Visitor"> | Date | string | null
    createdAt?: DateTimeFilter<"Visitor"> | Date | string
    updatedAt?: DateTimeFilter<"Visitor"> | Date | string
    status?: StringFilter<"Visitor"> | string
    views?: VisitorBusinessViewListRelationFilter
  }, "id">

  export type VisitorOrderByWithAggregationInput = {
    id?: SortOrder
    mobile?: SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpiredAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    _count?: VisitorCountOrderByAggregateInput
    _avg?: VisitorAvgOrderByAggregateInput
    _max?: VisitorMaxOrderByAggregateInput
    _min?: VisitorMinOrderByAggregateInput
    _sum?: VisitorSumOrderByAggregateInput
  }

  export type VisitorScalarWhereWithAggregatesInput = {
    AND?: VisitorScalarWhereWithAggregatesInput | VisitorScalarWhereWithAggregatesInput[]
    OR?: VisitorScalarWhereWithAggregatesInput[]
    NOT?: VisitorScalarWhereWithAggregatesInput | VisitorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Visitor"> | number
    mobile?: StringWithAggregatesFilter<"Visitor"> | string
    otp?: StringNullableWithAggregatesFilter<"Visitor"> | string | null
    otpExpiredAt?: DateTimeNullableWithAggregatesFilter<"Visitor"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Visitor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Visitor"> | Date | string
    status?: StringWithAggregatesFilter<"Visitor"> | string
  }

  export type VisitorBusinessViewWhereInput = {
    AND?: VisitorBusinessViewWhereInput | VisitorBusinessViewWhereInput[]
    OR?: VisitorBusinessViewWhereInput[]
    NOT?: VisitorBusinessViewWhereInput | VisitorBusinessViewWhereInput[]
    id?: IntFilter<"VisitorBusinessView"> | number
    visitorId?: IntFilter<"VisitorBusinessView"> | number
    businessId?: IntFilter<"VisitorBusinessView"> | number
    createdAt?: DateTimeFilter<"VisitorBusinessView"> | Date | string
    updatedAt?: DateTimeFilter<"VisitorBusinessView"> | Date | string
    status?: StringFilter<"VisitorBusinessView"> | string
    visitor?: XOR<VisitorScalarRelationFilter, VisitorWhereInput>
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
  }

  export type VisitorBusinessViewOrderByWithRelationInput = {
    id?: SortOrder
    visitorId?: SortOrder
    businessId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    visitor?: VisitorOrderByWithRelationInput
    business?: BusinessOrderByWithRelationInput
  }

  export type VisitorBusinessViewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VisitorBusinessViewWhereInput | VisitorBusinessViewWhereInput[]
    OR?: VisitorBusinessViewWhereInput[]
    NOT?: VisitorBusinessViewWhereInput | VisitorBusinessViewWhereInput[]
    visitorId?: IntFilter<"VisitorBusinessView"> | number
    businessId?: IntFilter<"VisitorBusinessView"> | number
    createdAt?: DateTimeFilter<"VisitorBusinessView"> | Date | string
    updatedAt?: DateTimeFilter<"VisitorBusinessView"> | Date | string
    status?: StringFilter<"VisitorBusinessView"> | string
    visitor?: XOR<VisitorScalarRelationFilter, VisitorWhereInput>
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
  }, "id">

  export type VisitorBusinessViewOrderByWithAggregationInput = {
    id?: SortOrder
    visitorId?: SortOrder
    businessId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    _count?: VisitorBusinessViewCountOrderByAggregateInput
    _avg?: VisitorBusinessViewAvgOrderByAggregateInput
    _max?: VisitorBusinessViewMaxOrderByAggregateInput
    _min?: VisitorBusinessViewMinOrderByAggregateInput
    _sum?: VisitorBusinessViewSumOrderByAggregateInput
  }

  export type VisitorBusinessViewScalarWhereWithAggregatesInput = {
    AND?: VisitorBusinessViewScalarWhereWithAggregatesInput | VisitorBusinessViewScalarWhereWithAggregatesInput[]
    OR?: VisitorBusinessViewScalarWhereWithAggregatesInput[]
    NOT?: VisitorBusinessViewScalarWhereWithAggregatesInput | VisitorBusinessViewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VisitorBusinessView"> | number
    visitorId?: IntWithAggregatesFilter<"VisitorBusinessView"> | number
    businessId?: IntWithAggregatesFilter<"VisitorBusinessView"> | number
    createdAt?: DateTimeWithAggregatesFilter<"VisitorBusinessView"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VisitorBusinessView"> | Date | string
    status?: StringWithAggregatesFilter<"VisitorBusinessView"> | string
  }

  export type CategoryCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    parent?: CategoryCreateNestedOneWithoutChildrenInput
    children?: CategoryCreateNestedManyWithoutParentInput
    businesses?: BusinessCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    parentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
    businesses?: BusinessUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
    children?: CategoryUpdateManyWithoutParentNestedInput
    businesses?: BusinessUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    businesses?: BusinessUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    parentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessCreateInput = {
    name: string
    description: string
    phoneNumber: string
    email: string
    website?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    address: AddressCreateNestedOneWithoutBusinessInput
    category: CategoryCreateNestedOneWithoutBusinessesInput
    owner: UserCreateNestedOneWithoutBusinessesInput
    bookings?: BusinessBookingCreateNestedManyWithoutBusinessInput
    medias?: BusinessMediaCreateNestedManyWithoutBusinessInput
    Review?: ReviewCreateNestedManyWithoutBusinessInput
    views?: VisitorBusinessViewCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    phoneNumber: string
    email: string
    website?: string | null
    logoUrl?: string | null
    categoryId: number
    ownerId: number
    addressId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    bookings?: BusinessBookingUncheckedCreateNestedManyWithoutBusinessInput
    medias?: BusinessMediaUncheckedCreateNestedManyWithoutBusinessInput
    Review?: ReviewUncheckedCreateNestedManyWithoutBusinessInput
    views?: VisitorBusinessViewUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    address?: AddressUpdateOneRequiredWithoutBusinessNestedInput
    category?: CategoryUpdateOneRequiredWithoutBusinessesNestedInput
    owner?: UserUpdateOneRequiredWithoutBusinessesNestedInput
    bookings?: BusinessBookingUpdateManyWithoutBusinessNestedInput
    medias?: BusinessMediaUpdateManyWithoutBusinessNestedInput
    Review?: ReviewUpdateManyWithoutBusinessNestedInput
    views?: VisitorBusinessViewUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    addressId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    bookings?: BusinessBookingUncheckedUpdateManyWithoutBusinessNestedInput
    medias?: BusinessMediaUncheckedUpdateManyWithoutBusinessNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutBusinessNestedInput
    views?: VisitorBusinessViewUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessCreateManyInput = {
    id?: number
    name: string
    description: string
    phoneNumber: string
    email: string
    website?: string | null
    logoUrl?: string | null
    categoryId: number
    ownerId: number
    addressId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type BusinessUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    addressId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessMediaCreateInput = {
    url: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    business: BusinessCreateNestedOneWithoutMediasInput
  }

  export type BusinessMediaUncheckedCreateInput = {
    id?: number
    url: string
    type: string
    businessId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type BusinessMediaUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    business?: BusinessUpdateOneRequiredWithoutMediasNestedInput
  }

  export type BusinessMediaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    businessId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessMediaCreateManyInput = {
    id?: number
    url: string
    type: string
    businessId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type BusinessMediaUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessMediaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    businessId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AddressCreateInput = {
    landmark?: string | null
    street: string
    city: string
    state: string
    country: string
    postalCode: string
    lat?: number | null
    lon?: number | null
    formattedAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    business?: BusinessCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: number
    landmark?: string | null
    street: string
    city: string
    state: string
    country: string
    postalCode: string
    lat?: number | null
    lon?: number | null
    formattedAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    business?: BusinessUncheckedCreateNestedOneWithoutAddressInput
  }

  export type AddressUpdateInput = {
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    formattedAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    business?: BusinessUpdateOneWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    formattedAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    business?: BusinessUncheckedUpdateOneWithoutAddressNestedInput
  }

  export type AddressCreateManyInput = {
    id?: number
    landmark?: string | null
    street: string
    city: string
    state: string
    country: string
    postalCode: string
    lat?: number | null
    lon?: number | null
    formattedAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type AddressUpdateManyMutationInput = {
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    formattedAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    formattedAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    username: string
    email: string
    phoneNumber: string
    password: string
    verificationToken?: string | null
    otpExpiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    businesses?: BusinessCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    phoneNumber: string
    password: string
    verificationToken?: string | null
    otpExpiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    businesses?: BusinessUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    businesses?: BusinessUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    businesses?: BusinessUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    phoneNumber: string
    password: string
    verificationToken?: string | null
    otpExpiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewCreateInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    business: BusinessCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    rating: number
    comment?: string | null
    businessId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type ReviewUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    business?: BusinessUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    businessId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewCreateManyInput = {
    id?: number
    rating: number
    comment?: string | null
    businessId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type ReviewUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    businessId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessBookingCreateInput = {
    bookingStartTime: Date | string
    bookingEndTime: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    business: BusinessCreateNestedOneWithoutBookingsInput
  }

  export type BusinessBookingUncheckedCreateInput = {
    id?: number
    businessId: number
    bookingStartTime: Date | string
    bookingEndTime: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type BusinessBookingUpdateInput = {
    bookingStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingEndTime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    business?: BusinessUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BusinessBookingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessId?: IntFieldUpdateOperationsInput | number
    bookingStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingEndTime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessBookingCreateManyInput = {
    id?: number
    businessId: number
    bookingStartTime: Date | string
    bookingEndTime: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type BusinessBookingUpdateManyMutationInput = {
    bookingStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingEndTime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessBookingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessId?: IntFieldUpdateOperationsInput | number
    bookingStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingEndTime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type LocationCreateInput = {
    displayName: string
    village?: string | null
    block?: string | null
    district?: string | null
    state?: string | null
    pinCode?: string | null
    lat?: number | null
    lon?: number | null
    source?: string | null
    apiDisplayName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type LocationUncheckedCreateInput = {
    id?: number
    displayName: string
    village?: string | null
    block?: string | null
    district?: string | null
    state?: string | null
    pinCode?: string | null
    lat?: number | null
    lon?: number | null
    source?: string | null
    apiDisplayName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type LocationUpdateInput = {
    displayName?: StringFieldUpdateOperationsInput | string
    village?: NullableStringFieldUpdateOperationsInput | string | null
    block?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pinCode?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    apiDisplayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type LocationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayName?: StringFieldUpdateOperationsInput | string
    village?: NullableStringFieldUpdateOperationsInput | string | null
    block?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pinCode?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    apiDisplayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type LocationCreateManyInput = {
    id?: number
    displayName: string
    village?: string | null
    block?: string | null
    district?: string | null
    state?: string | null
    pinCode?: string | null
    lat?: number | null
    lon?: number | null
    source?: string | null
    apiDisplayName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type LocationUpdateManyMutationInput = {
    displayName?: StringFieldUpdateOperationsInput | string
    village?: NullableStringFieldUpdateOperationsInput | string | null
    block?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pinCode?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    apiDisplayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayName?: StringFieldUpdateOperationsInput | string
    village?: NullableStringFieldUpdateOperationsInput | string | null
    block?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pinCode?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    apiDisplayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type VisitorCreateInput = {
    mobile: string
    otp?: string | null
    otpExpiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    views?: VisitorBusinessViewCreateNestedManyWithoutVisitorInput
  }

  export type VisitorUncheckedCreateInput = {
    id?: number
    mobile: string
    otp?: string | null
    otpExpiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    views?: VisitorBusinessViewUncheckedCreateNestedManyWithoutVisitorInput
  }

  export type VisitorUpdateInput = {
    mobile?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    views?: VisitorBusinessViewUpdateManyWithoutVisitorNestedInput
  }

  export type VisitorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mobile?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    views?: VisitorBusinessViewUncheckedUpdateManyWithoutVisitorNestedInput
  }

  export type VisitorCreateManyInput = {
    id?: number
    mobile: string
    otp?: string | null
    otpExpiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type VisitorUpdateManyMutationInput = {
    mobile?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type VisitorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mobile?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type VisitorBusinessViewCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    visitor: VisitorCreateNestedOneWithoutViewsInput
    business: BusinessCreateNestedOneWithoutViewsInput
  }

  export type VisitorBusinessViewUncheckedCreateInput = {
    id?: number
    visitorId: number
    businessId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type VisitorBusinessViewUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    visitor?: VisitorUpdateOneRequiredWithoutViewsNestedInput
    business?: BusinessUpdateOneRequiredWithoutViewsNestedInput
  }

  export type VisitorBusinessViewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    visitorId?: IntFieldUpdateOperationsInput | number
    businessId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type VisitorBusinessViewCreateManyInput = {
    id?: number
    visitorId: number
    businessId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type VisitorBusinessViewUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type VisitorBusinessViewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    visitorId?: IntFieldUpdateOperationsInput | number
    businessId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
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

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type BusinessListRelationFilter = {
    every?: BusinessWhereInput
    some?: BusinessWhereInput
    none?: BusinessWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusinessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
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

  export type AddressScalarRelationFilter = {
    is?: AddressWhereInput
    isNot?: AddressWhereInput
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BusinessBookingListRelationFilter = {
    every?: BusinessBookingWhereInput
    some?: BusinessBookingWhereInput
    none?: BusinessBookingWhereInput
  }

  export type BusinessMediaListRelationFilter = {
    every?: BusinessMediaWhereInput
    some?: BusinessMediaWhereInput
    none?: BusinessMediaWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type VisitorBusinessViewListRelationFilter = {
    every?: VisitorBusinessViewWhereInput
    some?: VisitorBusinessViewWhereInput
    none?: VisitorBusinessViewWhereInput
  }

  export type BusinessBookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusinessMediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VisitorBusinessViewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusinessCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    website?: SortOrder
    logoUrl?: SortOrder
    categoryId?: SortOrder
    ownerId?: SortOrder
    addressId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type BusinessAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    ownerId?: SortOrder
    addressId?: SortOrder
  }

  export type BusinessMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    website?: SortOrder
    logoUrl?: SortOrder
    categoryId?: SortOrder
    ownerId?: SortOrder
    addressId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type BusinessMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    website?: SortOrder
    logoUrl?: SortOrder
    categoryId?: SortOrder
    ownerId?: SortOrder
    addressId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type BusinessSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    ownerId?: SortOrder
    addressId?: SortOrder
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

  export type BusinessScalarRelationFilter = {
    is?: BusinessWhereInput
    isNot?: BusinessWhereInput
  }

  export type BusinessMediaCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    businessId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type BusinessMediaAvgOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
  }

  export type BusinessMediaMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    businessId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type BusinessMediaMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    businessId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type BusinessMediaSumOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BusinessNullableScalarRelationFilter = {
    is?: BusinessWhereInput | null
    isNot?: BusinessWhereInput | null
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    landmark?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
    formattedAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    id?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    landmark?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
    formattedAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    landmark?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
    formattedAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    id?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    verificationToken?: SortOrder
    otpExpiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    verificationToken?: SortOrder
    otpExpiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    verificationToken?: SortOrder
    otpExpiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    businessId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    businessId?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    businessId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    businessId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    businessId?: SortOrder
  }

  export type BusinessBookingCountOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    bookingStartTime?: SortOrder
    bookingEndTime?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type BusinessBookingAvgOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
  }

  export type BusinessBookingMaxOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    bookingStartTime?: SortOrder
    bookingEndTime?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type BusinessBookingMinOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    bookingStartTime?: SortOrder
    bookingEndTime?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type BusinessBookingSumOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    displayName?: SortOrder
    village?: SortOrder
    block?: SortOrder
    district?: SortOrder
    state?: SortOrder
    pinCode?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
    source?: SortOrder
    apiDisplayName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type LocationAvgOrderByAggregateInput = {
    id?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    displayName?: SortOrder
    village?: SortOrder
    block?: SortOrder
    district?: SortOrder
    state?: SortOrder
    pinCode?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
    source?: SortOrder
    apiDisplayName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    displayName?: SortOrder
    village?: SortOrder
    block?: SortOrder
    district?: SortOrder
    state?: SortOrder
    pinCode?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
    source?: SortOrder
    apiDisplayName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type LocationSumOrderByAggregateInput = {
    id?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
  }

  export type VisitorCountOrderByAggregateInput = {
    id?: SortOrder
    mobile?: SortOrder
    otp?: SortOrder
    otpExpiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type VisitorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VisitorMaxOrderByAggregateInput = {
    id?: SortOrder
    mobile?: SortOrder
    otp?: SortOrder
    otpExpiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type VisitorMinOrderByAggregateInput = {
    id?: SortOrder
    mobile?: SortOrder
    otp?: SortOrder
    otpExpiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type VisitorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VisitorScalarRelationFilter = {
    is?: VisitorWhereInput
    isNot?: VisitorWhereInput
  }

  export type VisitorBusinessViewCountOrderByAggregateInput = {
    id?: SortOrder
    visitorId?: SortOrder
    businessId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type VisitorBusinessViewAvgOrderByAggregateInput = {
    id?: SortOrder
    visitorId?: SortOrder
    businessId?: SortOrder
  }

  export type VisitorBusinessViewMaxOrderByAggregateInput = {
    id?: SortOrder
    visitorId?: SortOrder
    businessId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type VisitorBusinessViewMinOrderByAggregateInput = {
    id?: SortOrder
    visitorId?: SortOrder
    businessId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type VisitorBusinessViewSumOrderByAggregateInput = {
    id?: SortOrder
    visitorId?: SortOrder
    businessId?: SortOrder
  }

  export type CategoryCreateNestedOneWithoutChildrenInput = {
    create?: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutChildrenInput
    connect?: CategoryWhereUniqueInput
  }

  export type CategoryCreateNestedManyWithoutParentInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type BusinessCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BusinessCreateWithoutCategoryInput, BusinessUncheckedCreateWithoutCategoryInput> | BusinessCreateWithoutCategoryInput[] | BusinessUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BusinessCreateOrConnectWithoutCategoryInput | BusinessCreateOrConnectWithoutCategoryInput[]
    createMany?: BusinessCreateManyCategoryInputEnvelope
    connect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type BusinessUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BusinessCreateWithoutCategoryInput, BusinessUncheckedCreateWithoutCategoryInput> | BusinessCreateWithoutCategoryInput[] | BusinessUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BusinessCreateOrConnectWithoutCategoryInput | BusinessCreateOrConnectWithoutCategoryInput[]
    createMany?: BusinessCreateManyCategoryInputEnvelope
    connect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CategoryUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutChildrenInput
    upsert?: CategoryUpsertWithoutChildrenInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutChildrenInput, CategoryUpdateWithoutChildrenInput>, CategoryUncheckedUpdateWithoutChildrenInput>
  }

  export type CategoryUpdateManyWithoutParentNestedInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutParentInput | CategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutParentInput | CategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutParentInput | CategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type BusinessUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BusinessCreateWithoutCategoryInput, BusinessUncheckedCreateWithoutCategoryInput> | BusinessCreateWithoutCategoryInput[] | BusinessUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BusinessCreateOrConnectWithoutCategoryInput | BusinessCreateOrConnectWithoutCategoryInput[]
    upsert?: BusinessUpsertWithWhereUniqueWithoutCategoryInput | BusinessUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BusinessCreateManyCategoryInputEnvelope
    set?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    disconnect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    delete?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    connect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    update?: BusinessUpdateWithWhereUniqueWithoutCategoryInput | BusinessUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BusinessUpdateManyWithWhereWithoutCategoryInput | BusinessUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BusinessScalarWhereInput | BusinessScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoryUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutParentInput | CategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutParentInput | CategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutParentInput | CategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type BusinessUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BusinessCreateWithoutCategoryInput, BusinessUncheckedCreateWithoutCategoryInput> | BusinessCreateWithoutCategoryInput[] | BusinessUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BusinessCreateOrConnectWithoutCategoryInput | BusinessCreateOrConnectWithoutCategoryInput[]
    upsert?: BusinessUpsertWithWhereUniqueWithoutCategoryInput | BusinessUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BusinessCreateManyCategoryInputEnvelope
    set?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    disconnect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    delete?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    connect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    update?: BusinessUpdateWithWhereUniqueWithoutCategoryInput | BusinessUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BusinessUpdateManyWithWhereWithoutCategoryInput | BusinessUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BusinessScalarWhereInput | BusinessScalarWhereInput[]
  }

  export type AddressCreateNestedOneWithoutBusinessInput = {
    create?: XOR<AddressCreateWithoutBusinessInput, AddressUncheckedCreateWithoutBusinessInput>
    connectOrCreate?: AddressCreateOrConnectWithoutBusinessInput
    connect?: AddressWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutBusinessesInput = {
    create?: XOR<CategoryCreateWithoutBusinessesInput, CategoryUncheckedCreateWithoutBusinessesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBusinessesInput
    connect?: CategoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBusinessesInput = {
    create?: XOR<UserCreateWithoutBusinessesInput, UserUncheckedCreateWithoutBusinessesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBusinessesInput
    connect?: UserWhereUniqueInput
  }

  export type BusinessBookingCreateNestedManyWithoutBusinessInput = {
    create?: XOR<BusinessBookingCreateWithoutBusinessInput, BusinessBookingUncheckedCreateWithoutBusinessInput> | BusinessBookingCreateWithoutBusinessInput[] | BusinessBookingUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: BusinessBookingCreateOrConnectWithoutBusinessInput | BusinessBookingCreateOrConnectWithoutBusinessInput[]
    createMany?: BusinessBookingCreateManyBusinessInputEnvelope
    connect?: BusinessBookingWhereUniqueInput | BusinessBookingWhereUniqueInput[]
  }

  export type BusinessMediaCreateNestedManyWithoutBusinessInput = {
    create?: XOR<BusinessMediaCreateWithoutBusinessInput, BusinessMediaUncheckedCreateWithoutBusinessInput> | BusinessMediaCreateWithoutBusinessInput[] | BusinessMediaUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: BusinessMediaCreateOrConnectWithoutBusinessInput | BusinessMediaCreateOrConnectWithoutBusinessInput[]
    createMany?: BusinessMediaCreateManyBusinessInputEnvelope
    connect?: BusinessMediaWhereUniqueInput | BusinessMediaWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutBusinessInput = {
    create?: XOR<ReviewCreateWithoutBusinessInput, ReviewUncheckedCreateWithoutBusinessInput> | ReviewCreateWithoutBusinessInput[] | ReviewUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutBusinessInput | ReviewCreateOrConnectWithoutBusinessInput[]
    createMany?: ReviewCreateManyBusinessInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type VisitorBusinessViewCreateNestedManyWithoutBusinessInput = {
    create?: XOR<VisitorBusinessViewCreateWithoutBusinessInput, VisitorBusinessViewUncheckedCreateWithoutBusinessInput> | VisitorBusinessViewCreateWithoutBusinessInput[] | VisitorBusinessViewUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: VisitorBusinessViewCreateOrConnectWithoutBusinessInput | VisitorBusinessViewCreateOrConnectWithoutBusinessInput[]
    createMany?: VisitorBusinessViewCreateManyBusinessInputEnvelope
    connect?: VisitorBusinessViewWhereUniqueInput | VisitorBusinessViewWhereUniqueInput[]
  }

  export type BusinessBookingUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<BusinessBookingCreateWithoutBusinessInput, BusinessBookingUncheckedCreateWithoutBusinessInput> | BusinessBookingCreateWithoutBusinessInput[] | BusinessBookingUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: BusinessBookingCreateOrConnectWithoutBusinessInput | BusinessBookingCreateOrConnectWithoutBusinessInput[]
    createMany?: BusinessBookingCreateManyBusinessInputEnvelope
    connect?: BusinessBookingWhereUniqueInput | BusinessBookingWhereUniqueInput[]
  }

  export type BusinessMediaUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<BusinessMediaCreateWithoutBusinessInput, BusinessMediaUncheckedCreateWithoutBusinessInput> | BusinessMediaCreateWithoutBusinessInput[] | BusinessMediaUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: BusinessMediaCreateOrConnectWithoutBusinessInput | BusinessMediaCreateOrConnectWithoutBusinessInput[]
    createMany?: BusinessMediaCreateManyBusinessInputEnvelope
    connect?: BusinessMediaWhereUniqueInput | BusinessMediaWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<ReviewCreateWithoutBusinessInput, ReviewUncheckedCreateWithoutBusinessInput> | ReviewCreateWithoutBusinessInput[] | ReviewUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutBusinessInput | ReviewCreateOrConnectWithoutBusinessInput[]
    createMany?: ReviewCreateManyBusinessInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type VisitorBusinessViewUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<VisitorBusinessViewCreateWithoutBusinessInput, VisitorBusinessViewUncheckedCreateWithoutBusinessInput> | VisitorBusinessViewCreateWithoutBusinessInput[] | VisitorBusinessViewUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: VisitorBusinessViewCreateOrConnectWithoutBusinessInput | VisitorBusinessViewCreateOrConnectWithoutBusinessInput[]
    createMany?: VisitorBusinessViewCreateManyBusinessInputEnvelope
    connect?: VisitorBusinessViewWhereUniqueInput | VisitorBusinessViewWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AddressUpdateOneRequiredWithoutBusinessNestedInput = {
    create?: XOR<AddressCreateWithoutBusinessInput, AddressUncheckedCreateWithoutBusinessInput>
    connectOrCreate?: AddressCreateOrConnectWithoutBusinessInput
    upsert?: AddressUpsertWithoutBusinessInput
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutBusinessInput, AddressUpdateWithoutBusinessInput>, AddressUncheckedUpdateWithoutBusinessInput>
  }

  export type CategoryUpdateOneRequiredWithoutBusinessesNestedInput = {
    create?: XOR<CategoryCreateWithoutBusinessesInput, CategoryUncheckedCreateWithoutBusinessesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBusinessesInput
    upsert?: CategoryUpsertWithoutBusinessesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutBusinessesInput, CategoryUpdateWithoutBusinessesInput>, CategoryUncheckedUpdateWithoutBusinessesInput>
  }

  export type UserUpdateOneRequiredWithoutBusinessesNestedInput = {
    create?: XOR<UserCreateWithoutBusinessesInput, UserUncheckedCreateWithoutBusinessesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBusinessesInput
    upsert?: UserUpsertWithoutBusinessesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBusinessesInput, UserUpdateWithoutBusinessesInput>, UserUncheckedUpdateWithoutBusinessesInput>
  }

  export type BusinessBookingUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<BusinessBookingCreateWithoutBusinessInput, BusinessBookingUncheckedCreateWithoutBusinessInput> | BusinessBookingCreateWithoutBusinessInput[] | BusinessBookingUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: BusinessBookingCreateOrConnectWithoutBusinessInput | BusinessBookingCreateOrConnectWithoutBusinessInput[]
    upsert?: BusinessBookingUpsertWithWhereUniqueWithoutBusinessInput | BusinessBookingUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: BusinessBookingCreateManyBusinessInputEnvelope
    set?: BusinessBookingWhereUniqueInput | BusinessBookingWhereUniqueInput[]
    disconnect?: BusinessBookingWhereUniqueInput | BusinessBookingWhereUniqueInput[]
    delete?: BusinessBookingWhereUniqueInput | BusinessBookingWhereUniqueInput[]
    connect?: BusinessBookingWhereUniqueInput | BusinessBookingWhereUniqueInput[]
    update?: BusinessBookingUpdateWithWhereUniqueWithoutBusinessInput | BusinessBookingUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: BusinessBookingUpdateManyWithWhereWithoutBusinessInput | BusinessBookingUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: BusinessBookingScalarWhereInput | BusinessBookingScalarWhereInput[]
  }

  export type BusinessMediaUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<BusinessMediaCreateWithoutBusinessInput, BusinessMediaUncheckedCreateWithoutBusinessInput> | BusinessMediaCreateWithoutBusinessInput[] | BusinessMediaUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: BusinessMediaCreateOrConnectWithoutBusinessInput | BusinessMediaCreateOrConnectWithoutBusinessInput[]
    upsert?: BusinessMediaUpsertWithWhereUniqueWithoutBusinessInput | BusinessMediaUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: BusinessMediaCreateManyBusinessInputEnvelope
    set?: BusinessMediaWhereUniqueInput | BusinessMediaWhereUniqueInput[]
    disconnect?: BusinessMediaWhereUniqueInput | BusinessMediaWhereUniqueInput[]
    delete?: BusinessMediaWhereUniqueInput | BusinessMediaWhereUniqueInput[]
    connect?: BusinessMediaWhereUniqueInput | BusinessMediaWhereUniqueInput[]
    update?: BusinessMediaUpdateWithWhereUniqueWithoutBusinessInput | BusinessMediaUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: BusinessMediaUpdateManyWithWhereWithoutBusinessInput | BusinessMediaUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: BusinessMediaScalarWhereInput | BusinessMediaScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<ReviewCreateWithoutBusinessInput, ReviewUncheckedCreateWithoutBusinessInput> | ReviewCreateWithoutBusinessInput[] | ReviewUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutBusinessInput | ReviewCreateOrConnectWithoutBusinessInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutBusinessInput | ReviewUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: ReviewCreateManyBusinessInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutBusinessInput | ReviewUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutBusinessInput | ReviewUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type VisitorBusinessViewUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<VisitorBusinessViewCreateWithoutBusinessInput, VisitorBusinessViewUncheckedCreateWithoutBusinessInput> | VisitorBusinessViewCreateWithoutBusinessInput[] | VisitorBusinessViewUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: VisitorBusinessViewCreateOrConnectWithoutBusinessInput | VisitorBusinessViewCreateOrConnectWithoutBusinessInput[]
    upsert?: VisitorBusinessViewUpsertWithWhereUniqueWithoutBusinessInput | VisitorBusinessViewUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: VisitorBusinessViewCreateManyBusinessInputEnvelope
    set?: VisitorBusinessViewWhereUniqueInput | VisitorBusinessViewWhereUniqueInput[]
    disconnect?: VisitorBusinessViewWhereUniqueInput | VisitorBusinessViewWhereUniqueInput[]
    delete?: VisitorBusinessViewWhereUniqueInput | VisitorBusinessViewWhereUniqueInput[]
    connect?: VisitorBusinessViewWhereUniqueInput | VisitorBusinessViewWhereUniqueInput[]
    update?: VisitorBusinessViewUpdateWithWhereUniqueWithoutBusinessInput | VisitorBusinessViewUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: VisitorBusinessViewUpdateManyWithWhereWithoutBusinessInput | VisitorBusinessViewUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: VisitorBusinessViewScalarWhereInput | VisitorBusinessViewScalarWhereInput[]
  }

  export type BusinessBookingUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<BusinessBookingCreateWithoutBusinessInput, BusinessBookingUncheckedCreateWithoutBusinessInput> | BusinessBookingCreateWithoutBusinessInput[] | BusinessBookingUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: BusinessBookingCreateOrConnectWithoutBusinessInput | BusinessBookingCreateOrConnectWithoutBusinessInput[]
    upsert?: BusinessBookingUpsertWithWhereUniqueWithoutBusinessInput | BusinessBookingUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: BusinessBookingCreateManyBusinessInputEnvelope
    set?: BusinessBookingWhereUniqueInput | BusinessBookingWhereUniqueInput[]
    disconnect?: BusinessBookingWhereUniqueInput | BusinessBookingWhereUniqueInput[]
    delete?: BusinessBookingWhereUniqueInput | BusinessBookingWhereUniqueInput[]
    connect?: BusinessBookingWhereUniqueInput | BusinessBookingWhereUniqueInput[]
    update?: BusinessBookingUpdateWithWhereUniqueWithoutBusinessInput | BusinessBookingUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: BusinessBookingUpdateManyWithWhereWithoutBusinessInput | BusinessBookingUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: BusinessBookingScalarWhereInput | BusinessBookingScalarWhereInput[]
  }

  export type BusinessMediaUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<BusinessMediaCreateWithoutBusinessInput, BusinessMediaUncheckedCreateWithoutBusinessInput> | BusinessMediaCreateWithoutBusinessInput[] | BusinessMediaUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: BusinessMediaCreateOrConnectWithoutBusinessInput | BusinessMediaCreateOrConnectWithoutBusinessInput[]
    upsert?: BusinessMediaUpsertWithWhereUniqueWithoutBusinessInput | BusinessMediaUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: BusinessMediaCreateManyBusinessInputEnvelope
    set?: BusinessMediaWhereUniqueInput | BusinessMediaWhereUniqueInput[]
    disconnect?: BusinessMediaWhereUniqueInput | BusinessMediaWhereUniqueInput[]
    delete?: BusinessMediaWhereUniqueInput | BusinessMediaWhereUniqueInput[]
    connect?: BusinessMediaWhereUniqueInput | BusinessMediaWhereUniqueInput[]
    update?: BusinessMediaUpdateWithWhereUniqueWithoutBusinessInput | BusinessMediaUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: BusinessMediaUpdateManyWithWhereWithoutBusinessInput | BusinessMediaUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: BusinessMediaScalarWhereInput | BusinessMediaScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<ReviewCreateWithoutBusinessInput, ReviewUncheckedCreateWithoutBusinessInput> | ReviewCreateWithoutBusinessInput[] | ReviewUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutBusinessInput | ReviewCreateOrConnectWithoutBusinessInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutBusinessInput | ReviewUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: ReviewCreateManyBusinessInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutBusinessInput | ReviewUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutBusinessInput | ReviewUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type VisitorBusinessViewUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<VisitorBusinessViewCreateWithoutBusinessInput, VisitorBusinessViewUncheckedCreateWithoutBusinessInput> | VisitorBusinessViewCreateWithoutBusinessInput[] | VisitorBusinessViewUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: VisitorBusinessViewCreateOrConnectWithoutBusinessInput | VisitorBusinessViewCreateOrConnectWithoutBusinessInput[]
    upsert?: VisitorBusinessViewUpsertWithWhereUniqueWithoutBusinessInput | VisitorBusinessViewUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: VisitorBusinessViewCreateManyBusinessInputEnvelope
    set?: VisitorBusinessViewWhereUniqueInput | VisitorBusinessViewWhereUniqueInput[]
    disconnect?: VisitorBusinessViewWhereUniqueInput | VisitorBusinessViewWhereUniqueInput[]
    delete?: VisitorBusinessViewWhereUniqueInput | VisitorBusinessViewWhereUniqueInput[]
    connect?: VisitorBusinessViewWhereUniqueInput | VisitorBusinessViewWhereUniqueInput[]
    update?: VisitorBusinessViewUpdateWithWhereUniqueWithoutBusinessInput | VisitorBusinessViewUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: VisitorBusinessViewUpdateManyWithWhereWithoutBusinessInput | VisitorBusinessViewUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: VisitorBusinessViewScalarWhereInput | VisitorBusinessViewScalarWhereInput[]
  }

  export type BusinessCreateNestedOneWithoutMediasInput = {
    create?: XOR<BusinessCreateWithoutMediasInput, BusinessUncheckedCreateWithoutMediasInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutMediasInput
    connect?: BusinessWhereUniqueInput
  }

  export type BusinessUpdateOneRequiredWithoutMediasNestedInput = {
    create?: XOR<BusinessCreateWithoutMediasInput, BusinessUncheckedCreateWithoutMediasInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutMediasInput
    upsert?: BusinessUpsertWithoutMediasInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutMediasInput, BusinessUpdateWithoutMediasInput>, BusinessUncheckedUpdateWithoutMediasInput>
  }

  export type BusinessCreateNestedOneWithoutAddressInput = {
    create?: XOR<BusinessCreateWithoutAddressInput, BusinessUncheckedCreateWithoutAddressInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutAddressInput
    connect?: BusinessWhereUniqueInput
  }

  export type BusinessUncheckedCreateNestedOneWithoutAddressInput = {
    create?: XOR<BusinessCreateWithoutAddressInput, BusinessUncheckedCreateWithoutAddressInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutAddressInput
    connect?: BusinessWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BusinessUpdateOneWithoutAddressNestedInput = {
    create?: XOR<BusinessCreateWithoutAddressInput, BusinessUncheckedCreateWithoutAddressInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutAddressInput
    upsert?: BusinessUpsertWithoutAddressInput
    disconnect?: BusinessWhereInput | boolean
    delete?: BusinessWhereInput | boolean
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutAddressInput, BusinessUpdateWithoutAddressInput>, BusinessUncheckedUpdateWithoutAddressInput>
  }

  export type BusinessUncheckedUpdateOneWithoutAddressNestedInput = {
    create?: XOR<BusinessCreateWithoutAddressInput, BusinessUncheckedCreateWithoutAddressInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutAddressInput
    upsert?: BusinessUpsertWithoutAddressInput
    disconnect?: BusinessWhereInput | boolean
    delete?: BusinessWhereInput | boolean
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutAddressInput, BusinessUpdateWithoutAddressInput>, BusinessUncheckedUpdateWithoutAddressInput>
  }

  export type BusinessCreateNestedManyWithoutOwnerInput = {
    create?: XOR<BusinessCreateWithoutOwnerInput, BusinessUncheckedCreateWithoutOwnerInput> | BusinessCreateWithoutOwnerInput[] | BusinessUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: BusinessCreateOrConnectWithoutOwnerInput | BusinessCreateOrConnectWithoutOwnerInput[]
    createMany?: BusinessCreateManyOwnerInputEnvelope
    connect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
  }

  export type BusinessUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<BusinessCreateWithoutOwnerInput, BusinessUncheckedCreateWithoutOwnerInput> | BusinessCreateWithoutOwnerInput[] | BusinessUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: BusinessCreateOrConnectWithoutOwnerInput | BusinessCreateOrConnectWithoutOwnerInput[]
    createMany?: BusinessCreateManyOwnerInputEnvelope
    connect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BusinessUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<BusinessCreateWithoutOwnerInput, BusinessUncheckedCreateWithoutOwnerInput> | BusinessCreateWithoutOwnerInput[] | BusinessUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: BusinessCreateOrConnectWithoutOwnerInput | BusinessCreateOrConnectWithoutOwnerInput[]
    upsert?: BusinessUpsertWithWhereUniqueWithoutOwnerInput | BusinessUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: BusinessCreateManyOwnerInputEnvelope
    set?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    disconnect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    delete?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    connect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    update?: BusinessUpdateWithWhereUniqueWithoutOwnerInput | BusinessUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: BusinessUpdateManyWithWhereWithoutOwnerInput | BusinessUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: BusinessScalarWhereInput | BusinessScalarWhereInput[]
  }

  export type BusinessUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<BusinessCreateWithoutOwnerInput, BusinessUncheckedCreateWithoutOwnerInput> | BusinessCreateWithoutOwnerInput[] | BusinessUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: BusinessCreateOrConnectWithoutOwnerInput | BusinessCreateOrConnectWithoutOwnerInput[]
    upsert?: BusinessUpsertWithWhereUniqueWithoutOwnerInput | BusinessUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: BusinessCreateManyOwnerInputEnvelope
    set?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    disconnect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    delete?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    connect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    update?: BusinessUpdateWithWhereUniqueWithoutOwnerInput | BusinessUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: BusinessUpdateManyWithWhereWithoutOwnerInput | BusinessUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: BusinessScalarWhereInput | BusinessScalarWhereInput[]
  }

  export type BusinessCreateNestedOneWithoutReviewInput = {
    create?: XOR<BusinessCreateWithoutReviewInput, BusinessUncheckedCreateWithoutReviewInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutReviewInput
    connect?: BusinessWhereUniqueInput
  }

  export type BusinessUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<BusinessCreateWithoutReviewInput, BusinessUncheckedCreateWithoutReviewInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutReviewInput
    upsert?: BusinessUpsertWithoutReviewInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutReviewInput, BusinessUpdateWithoutReviewInput>, BusinessUncheckedUpdateWithoutReviewInput>
  }

  export type BusinessCreateNestedOneWithoutBookingsInput = {
    create?: XOR<BusinessCreateWithoutBookingsInput, BusinessUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutBookingsInput
    connect?: BusinessWhereUniqueInput
  }

  export type BusinessUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<BusinessCreateWithoutBookingsInput, BusinessUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutBookingsInput
    upsert?: BusinessUpsertWithoutBookingsInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutBookingsInput, BusinessUpdateWithoutBookingsInput>, BusinessUncheckedUpdateWithoutBookingsInput>
  }

  export type VisitorBusinessViewCreateNestedManyWithoutVisitorInput = {
    create?: XOR<VisitorBusinessViewCreateWithoutVisitorInput, VisitorBusinessViewUncheckedCreateWithoutVisitorInput> | VisitorBusinessViewCreateWithoutVisitorInput[] | VisitorBusinessViewUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: VisitorBusinessViewCreateOrConnectWithoutVisitorInput | VisitorBusinessViewCreateOrConnectWithoutVisitorInput[]
    createMany?: VisitorBusinessViewCreateManyVisitorInputEnvelope
    connect?: VisitorBusinessViewWhereUniqueInput | VisitorBusinessViewWhereUniqueInput[]
  }

  export type VisitorBusinessViewUncheckedCreateNestedManyWithoutVisitorInput = {
    create?: XOR<VisitorBusinessViewCreateWithoutVisitorInput, VisitorBusinessViewUncheckedCreateWithoutVisitorInput> | VisitorBusinessViewCreateWithoutVisitorInput[] | VisitorBusinessViewUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: VisitorBusinessViewCreateOrConnectWithoutVisitorInput | VisitorBusinessViewCreateOrConnectWithoutVisitorInput[]
    createMany?: VisitorBusinessViewCreateManyVisitorInputEnvelope
    connect?: VisitorBusinessViewWhereUniqueInput | VisitorBusinessViewWhereUniqueInput[]
  }

  export type VisitorBusinessViewUpdateManyWithoutVisitorNestedInput = {
    create?: XOR<VisitorBusinessViewCreateWithoutVisitorInput, VisitorBusinessViewUncheckedCreateWithoutVisitorInput> | VisitorBusinessViewCreateWithoutVisitorInput[] | VisitorBusinessViewUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: VisitorBusinessViewCreateOrConnectWithoutVisitorInput | VisitorBusinessViewCreateOrConnectWithoutVisitorInput[]
    upsert?: VisitorBusinessViewUpsertWithWhereUniqueWithoutVisitorInput | VisitorBusinessViewUpsertWithWhereUniqueWithoutVisitorInput[]
    createMany?: VisitorBusinessViewCreateManyVisitorInputEnvelope
    set?: VisitorBusinessViewWhereUniqueInput | VisitorBusinessViewWhereUniqueInput[]
    disconnect?: VisitorBusinessViewWhereUniqueInput | VisitorBusinessViewWhereUniqueInput[]
    delete?: VisitorBusinessViewWhereUniqueInput | VisitorBusinessViewWhereUniqueInput[]
    connect?: VisitorBusinessViewWhereUniqueInput | VisitorBusinessViewWhereUniqueInput[]
    update?: VisitorBusinessViewUpdateWithWhereUniqueWithoutVisitorInput | VisitorBusinessViewUpdateWithWhereUniqueWithoutVisitorInput[]
    updateMany?: VisitorBusinessViewUpdateManyWithWhereWithoutVisitorInput | VisitorBusinessViewUpdateManyWithWhereWithoutVisitorInput[]
    deleteMany?: VisitorBusinessViewScalarWhereInput | VisitorBusinessViewScalarWhereInput[]
  }

  export type VisitorBusinessViewUncheckedUpdateManyWithoutVisitorNestedInput = {
    create?: XOR<VisitorBusinessViewCreateWithoutVisitorInput, VisitorBusinessViewUncheckedCreateWithoutVisitorInput> | VisitorBusinessViewCreateWithoutVisitorInput[] | VisitorBusinessViewUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: VisitorBusinessViewCreateOrConnectWithoutVisitorInput | VisitorBusinessViewCreateOrConnectWithoutVisitorInput[]
    upsert?: VisitorBusinessViewUpsertWithWhereUniqueWithoutVisitorInput | VisitorBusinessViewUpsertWithWhereUniqueWithoutVisitorInput[]
    createMany?: VisitorBusinessViewCreateManyVisitorInputEnvelope
    set?: VisitorBusinessViewWhereUniqueInput | VisitorBusinessViewWhereUniqueInput[]
    disconnect?: VisitorBusinessViewWhereUniqueInput | VisitorBusinessViewWhereUniqueInput[]
    delete?: VisitorBusinessViewWhereUniqueInput | VisitorBusinessViewWhereUniqueInput[]
    connect?: VisitorBusinessViewWhereUniqueInput | VisitorBusinessViewWhereUniqueInput[]
    update?: VisitorBusinessViewUpdateWithWhereUniqueWithoutVisitorInput | VisitorBusinessViewUpdateWithWhereUniqueWithoutVisitorInput[]
    updateMany?: VisitorBusinessViewUpdateManyWithWhereWithoutVisitorInput | VisitorBusinessViewUpdateManyWithWhereWithoutVisitorInput[]
    deleteMany?: VisitorBusinessViewScalarWhereInput | VisitorBusinessViewScalarWhereInput[]
  }

  export type VisitorCreateNestedOneWithoutViewsInput = {
    create?: XOR<VisitorCreateWithoutViewsInput, VisitorUncheckedCreateWithoutViewsInput>
    connectOrCreate?: VisitorCreateOrConnectWithoutViewsInput
    connect?: VisitorWhereUniqueInput
  }

  export type BusinessCreateNestedOneWithoutViewsInput = {
    create?: XOR<BusinessCreateWithoutViewsInput, BusinessUncheckedCreateWithoutViewsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutViewsInput
    connect?: BusinessWhereUniqueInput
  }

  export type VisitorUpdateOneRequiredWithoutViewsNestedInput = {
    create?: XOR<VisitorCreateWithoutViewsInput, VisitorUncheckedCreateWithoutViewsInput>
    connectOrCreate?: VisitorCreateOrConnectWithoutViewsInput
    upsert?: VisitorUpsertWithoutViewsInput
    connect?: VisitorWhereUniqueInput
    update?: XOR<XOR<VisitorUpdateToOneWithWhereWithoutViewsInput, VisitorUpdateWithoutViewsInput>, VisitorUncheckedUpdateWithoutViewsInput>
  }

  export type BusinessUpdateOneRequiredWithoutViewsNestedInput = {
    create?: XOR<BusinessCreateWithoutViewsInput, BusinessUncheckedCreateWithoutViewsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutViewsInput
    upsert?: BusinessUpsertWithoutViewsInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutViewsInput, BusinessUpdateWithoutViewsInput>, BusinessUncheckedUpdateWithoutViewsInput>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type CategoryCreateWithoutChildrenInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    parent?: CategoryCreateNestedOneWithoutChildrenInput
    businesses?: BusinessCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutChildrenInput = {
    id?: number
    name: string
    parentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    businesses?: BusinessUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutChildrenInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
  }

  export type CategoryCreateWithoutParentInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    children?: CategoryCreateNestedManyWithoutParentInput
    businesses?: BusinessCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutParentInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
    businesses?: BusinessUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutParentInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput>
  }

  export type CategoryCreateManyParentInputEnvelope = {
    data: CategoryCreateManyParentInput | CategoryCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type BusinessCreateWithoutCategoryInput = {
    name: string
    description: string
    phoneNumber: string
    email: string
    website?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    address: AddressCreateNestedOneWithoutBusinessInput
    owner: UserCreateNestedOneWithoutBusinessesInput
    bookings?: BusinessBookingCreateNestedManyWithoutBusinessInput
    medias?: BusinessMediaCreateNestedManyWithoutBusinessInput
    Review?: ReviewCreateNestedManyWithoutBusinessInput
    views?: VisitorBusinessViewCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    description: string
    phoneNumber: string
    email: string
    website?: string | null
    logoUrl?: string | null
    ownerId: number
    addressId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    bookings?: BusinessBookingUncheckedCreateNestedManyWithoutBusinessInput
    medias?: BusinessMediaUncheckedCreateNestedManyWithoutBusinessInput
    Review?: ReviewUncheckedCreateNestedManyWithoutBusinessInput
    views?: VisitorBusinessViewUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutCategoryInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutCategoryInput, BusinessUncheckedCreateWithoutCategoryInput>
  }

  export type BusinessCreateManyCategoryInputEnvelope = {
    data: BusinessCreateManyCategoryInput | BusinessCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutChildrenInput = {
    update: XOR<CategoryUpdateWithoutChildrenInput, CategoryUncheckedUpdateWithoutChildrenInput>
    create: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutChildrenInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutChildrenInput, CategoryUncheckedUpdateWithoutChildrenInput>
  }

  export type CategoryUpdateWithoutChildrenInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
    businesses?: BusinessUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    businesses?: BusinessUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUpsertWithWhereUniqueWithoutParentInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutParentInput, CategoryUncheckedUpdateWithoutParentInput>
    create: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutParentInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutParentInput, CategoryUncheckedUpdateWithoutParentInput>
  }

  export type CategoryUpdateManyWithWhereWithoutParentInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutParentInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    parentId?: IntNullableFilter<"Category"> | number | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    status?: StringFilter<"Category"> | string
  }

  export type BusinessUpsertWithWhereUniqueWithoutCategoryInput = {
    where: BusinessWhereUniqueInput
    update: XOR<BusinessUpdateWithoutCategoryInput, BusinessUncheckedUpdateWithoutCategoryInput>
    create: XOR<BusinessCreateWithoutCategoryInput, BusinessUncheckedCreateWithoutCategoryInput>
  }

  export type BusinessUpdateWithWhereUniqueWithoutCategoryInput = {
    where: BusinessWhereUniqueInput
    data: XOR<BusinessUpdateWithoutCategoryInput, BusinessUncheckedUpdateWithoutCategoryInput>
  }

  export type BusinessUpdateManyWithWhereWithoutCategoryInput = {
    where: BusinessScalarWhereInput
    data: XOR<BusinessUpdateManyMutationInput, BusinessUncheckedUpdateManyWithoutCategoryInput>
  }

  export type BusinessScalarWhereInput = {
    AND?: BusinessScalarWhereInput | BusinessScalarWhereInput[]
    OR?: BusinessScalarWhereInput[]
    NOT?: BusinessScalarWhereInput | BusinessScalarWhereInput[]
    id?: IntFilter<"Business"> | number
    name?: StringFilter<"Business"> | string
    description?: StringFilter<"Business"> | string
    phoneNumber?: StringFilter<"Business"> | string
    email?: StringFilter<"Business"> | string
    website?: StringNullableFilter<"Business"> | string | null
    logoUrl?: StringNullableFilter<"Business"> | string | null
    categoryId?: IntFilter<"Business"> | number
    ownerId?: IntFilter<"Business"> | number
    addressId?: IntFilter<"Business"> | number
    createdAt?: DateTimeFilter<"Business"> | Date | string
    updatedAt?: DateTimeFilter<"Business"> | Date | string
    status?: StringFilter<"Business"> | string
  }

  export type AddressCreateWithoutBusinessInput = {
    landmark?: string | null
    street: string
    city: string
    state: string
    country: string
    postalCode: string
    lat?: number | null
    lon?: number | null
    formattedAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type AddressUncheckedCreateWithoutBusinessInput = {
    id?: number
    landmark?: string | null
    street: string
    city: string
    state: string
    country: string
    postalCode: string
    lat?: number | null
    lon?: number | null
    formattedAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type AddressCreateOrConnectWithoutBusinessInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutBusinessInput, AddressUncheckedCreateWithoutBusinessInput>
  }

  export type CategoryCreateWithoutBusinessesInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    parent?: CategoryCreateNestedOneWithoutChildrenInput
    children?: CategoryCreateNestedManyWithoutParentInput
  }

  export type CategoryUncheckedCreateWithoutBusinessesInput = {
    id?: number
    name: string
    parentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
  }

  export type CategoryCreateOrConnectWithoutBusinessesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutBusinessesInput, CategoryUncheckedCreateWithoutBusinessesInput>
  }

  export type UserCreateWithoutBusinessesInput = {
    username: string
    email: string
    phoneNumber: string
    password: string
    verificationToken?: string | null
    otpExpiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type UserUncheckedCreateWithoutBusinessesInput = {
    id?: number
    username: string
    email: string
    phoneNumber: string
    password: string
    verificationToken?: string | null
    otpExpiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type UserCreateOrConnectWithoutBusinessesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBusinessesInput, UserUncheckedCreateWithoutBusinessesInput>
  }

  export type BusinessBookingCreateWithoutBusinessInput = {
    bookingStartTime: Date | string
    bookingEndTime: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type BusinessBookingUncheckedCreateWithoutBusinessInput = {
    id?: number
    bookingStartTime: Date | string
    bookingEndTime: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type BusinessBookingCreateOrConnectWithoutBusinessInput = {
    where: BusinessBookingWhereUniqueInput
    create: XOR<BusinessBookingCreateWithoutBusinessInput, BusinessBookingUncheckedCreateWithoutBusinessInput>
  }

  export type BusinessBookingCreateManyBusinessInputEnvelope = {
    data: BusinessBookingCreateManyBusinessInput | BusinessBookingCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type BusinessMediaCreateWithoutBusinessInput = {
    url: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type BusinessMediaUncheckedCreateWithoutBusinessInput = {
    id?: number
    url: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type BusinessMediaCreateOrConnectWithoutBusinessInput = {
    where: BusinessMediaWhereUniqueInput
    create: XOR<BusinessMediaCreateWithoutBusinessInput, BusinessMediaUncheckedCreateWithoutBusinessInput>
  }

  export type BusinessMediaCreateManyBusinessInputEnvelope = {
    data: BusinessMediaCreateManyBusinessInput | BusinessMediaCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutBusinessInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type ReviewUncheckedCreateWithoutBusinessInput = {
    id?: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type ReviewCreateOrConnectWithoutBusinessInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutBusinessInput, ReviewUncheckedCreateWithoutBusinessInput>
  }

  export type ReviewCreateManyBusinessInputEnvelope = {
    data: ReviewCreateManyBusinessInput | ReviewCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type VisitorBusinessViewCreateWithoutBusinessInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    visitor: VisitorCreateNestedOneWithoutViewsInput
  }

  export type VisitorBusinessViewUncheckedCreateWithoutBusinessInput = {
    id?: number
    visitorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type VisitorBusinessViewCreateOrConnectWithoutBusinessInput = {
    where: VisitorBusinessViewWhereUniqueInput
    create: XOR<VisitorBusinessViewCreateWithoutBusinessInput, VisitorBusinessViewUncheckedCreateWithoutBusinessInput>
  }

  export type VisitorBusinessViewCreateManyBusinessInputEnvelope = {
    data: VisitorBusinessViewCreateManyBusinessInput | VisitorBusinessViewCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type AddressUpsertWithoutBusinessInput = {
    update: XOR<AddressUpdateWithoutBusinessInput, AddressUncheckedUpdateWithoutBusinessInput>
    create: XOR<AddressCreateWithoutBusinessInput, AddressUncheckedCreateWithoutBusinessInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutBusinessInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutBusinessInput, AddressUncheckedUpdateWithoutBusinessInput>
  }

  export type AddressUpdateWithoutBusinessInput = {
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    formattedAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUncheckedUpdateWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    formattedAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUpsertWithoutBusinessesInput = {
    update: XOR<CategoryUpdateWithoutBusinessesInput, CategoryUncheckedUpdateWithoutBusinessesInput>
    create: XOR<CategoryCreateWithoutBusinessesInput, CategoryUncheckedCreateWithoutBusinessesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutBusinessesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutBusinessesInput, CategoryUncheckedUpdateWithoutBusinessesInput>
  }

  export type CategoryUpdateWithoutBusinessesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
    children?: CategoryUpdateManyWithoutParentNestedInput
  }

  export type CategoryUncheckedUpdateWithoutBusinessesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
  }

  export type UserUpsertWithoutBusinessesInput = {
    update: XOR<UserUpdateWithoutBusinessesInput, UserUncheckedUpdateWithoutBusinessesInput>
    create: XOR<UserCreateWithoutBusinessesInput, UserUncheckedCreateWithoutBusinessesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBusinessesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBusinessesInput, UserUncheckedUpdateWithoutBusinessesInput>
  }

  export type UserUpdateWithoutBusinessesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutBusinessesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessBookingUpsertWithWhereUniqueWithoutBusinessInput = {
    where: BusinessBookingWhereUniqueInput
    update: XOR<BusinessBookingUpdateWithoutBusinessInput, BusinessBookingUncheckedUpdateWithoutBusinessInput>
    create: XOR<BusinessBookingCreateWithoutBusinessInput, BusinessBookingUncheckedCreateWithoutBusinessInput>
  }

  export type BusinessBookingUpdateWithWhereUniqueWithoutBusinessInput = {
    where: BusinessBookingWhereUniqueInput
    data: XOR<BusinessBookingUpdateWithoutBusinessInput, BusinessBookingUncheckedUpdateWithoutBusinessInput>
  }

  export type BusinessBookingUpdateManyWithWhereWithoutBusinessInput = {
    where: BusinessBookingScalarWhereInput
    data: XOR<BusinessBookingUpdateManyMutationInput, BusinessBookingUncheckedUpdateManyWithoutBusinessInput>
  }

  export type BusinessBookingScalarWhereInput = {
    AND?: BusinessBookingScalarWhereInput | BusinessBookingScalarWhereInput[]
    OR?: BusinessBookingScalarWhereInput[]
    NOT?: BusinessBookingScalarWhereInput | BusinessBookingScalarWhereInput[]
    id?: IntFilter<"BusinessBooking"> | number
    businessId?: IntFilter<"BusinessBooking"> | number
    bookingStartTime?: DateTimeFilter<"BusinessBooking"> | Date | string
    bookingEndTime?: DateTimeFilter<"BusinessBooking"> | Date | string
    description?: StringNullableFilter<"BusinessBooking"> | string | null
    createdAt?: DateTimeFilter<"BusinessBooking"> | Date | string
    updatedAt?: DateTimeFilter<"BusinessBooking"> | Date | string
    status?: StringFilter<"BusinessBooking"> | string
  }

  export type BusinessMediaUpsertWithWhereUniqueWithoutBusinessInput = {
    where: BusinessMediaWhereUniqueInput
    update: XOR<BusinessMediaUpdateWithoutBusinessInput, BusinessMediaUncheckedUpdateWithoutBusinessInput>
    create: XOR<BusinessMediaCreateWithoutBusinessInput, BusinessMediaUncheckedCreateWithoutBusinessInput>
  }

  export type BusinessMediaUpdateWithWhereUniqueWithoutBusinessInput = {
    where: BusinessMediaWhereUniqueInput
    data: XOR<BusinessMediaUpdateWithoutBusinessInput, BusinessMediaUncheckedUpdateWithoutBusinessInput>
  }

  export type BusinessMediaUpdateManyWithWhereWithoutBusinessInput = {
    where: BusinessMediaScalarWhereInput
    data: XOR<BusinessMediaUpdateManyMutationInput, BusinessMediaUncheckedUpdateManyWithoutBusinessInput>
  }

  export type BusinessMediaScalarWhereInput = {
    AND?: BusinessMediaScalarWhereInput | BusinessMediaScalarWhereInput[]
    OR?: BusinessMediaScalarWhereInput[]
    NOT?: BusinessMediaScalarWhereInput | BusinessMediaScalarWhereInput[]
    id?: IntFilter<"BusinessMedia"> | number
    url?: StringFilter<"BusinessMedia"> | string
    type?: StringFilter<"BusinessMedia"> | string
    businessId?: IntFilter<"BusinessMedia"> | number
    createdAt?: DateTimeFilter<"BusinessMedia"> | Date | string
    updatedAt?: DateTimeFilter<"BusinessMedia"> | Date | string
    status?: StringFilter<"BusinessMedia"> | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutBusinessInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutBusinessInput, ReviewUncheckedUpdateWithoutBusinessInput>
    create: XOR<ReviewCreateWithoutBusinessInput, ReviewUncheckedCreateWithoutBusinessInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutBusinessInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutBusinessInput, ReviewUncheckedUpdateWithoutBusinessInput>
  }

  export type ReviewUpdateManyWithWhereWithoutBusinessInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutBusinessInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    businessId?: IntFilter<"Review"> | number
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    status?: StringFilter<"Review"> | string
  }

  export type VisitorBusinessViewUpsertWithWhereUniqueWithoutBusinessInput = {
    where: VisitorBusinessViewWhereUniqueInput
    update: XOR<VisitorBusinessViewUpdateWithoutBusinessInput, VisitorBusinessViewUncheckedUpdateWithoutBusinessInput>
    create: XOR<VisitorBusinessViewCreateWithoutBusinessInput, VisitorBusinessViewUncheckedCreateWithoutBusinessInput>
  }

  export type VisitorBusinessViewUpdateWithWhereUniqueWithoutBusinessInput = {
    where: VisitorBusinessViewWhereUniqueInput
    data: XOR<VisitorBusinessViewUpdateWithoutBusinessInput, VisitorBusinessViewUncheckedUpdateWithoutBusinessInput>
  }

  export type VisitorBusinessViewUpdateManyWithWhereWithoutBusinessInput = {
    where: VisitorBusinessViewScalarWhereInput
    data: XOR<VisitorBusinessViewUpdateManyMutationInput, VisitorBusinessViewUncheckedUpdateManyWithoutBusinessInput>
  }

  export type VisitorBusinessViewScalarWhereInput = {
    AND?: VisitorBusinessViewScalarWhereInput | VisitorBusinessViewScalarWhereInput[]
    OR?: VisitorBusinessViewScalarWhereInput[]
    NOT?: VisitorBusinessViewScalarWhereInput | VisitorBusinessViewScalarWhereInput[]
    id?: IntFilter<"VisitorBusinessView"> | number
    visitorId?: IntFilter<"VisitorBusinessView"> | number
    businessId?: IntFilter<"VisitorBusinessView"> | number
    createdAt?: DateTimeFilter<"VisitorBusinessView"> | Date | string
    updatedAt?: DateTimeFilter<"VisitorBusinessView"> | Date | string
    status?: StringFilter<"VisitorBusinessView"> | string
  }

  export type BusinessCreateWithoutMediasInput = {
    name: string
    description: string
    phoneNumber: string
    email: string
    website?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    address: AddressCreateNestedOneWithoutBusinessInput
    category: CategoryCreateNestedOneWithoutBusinessesInput
    owner: UserCreateNestedOneWithoutBusinessesInput
    bookings?: BusinessBookingCreateNestedManyWithoutBusinessInput
    Review?: ReviewCreateNestedManyWithoutBusinessInput
    views?: VisitorBusinessViewCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutMediasInput = {
    id?: number
    name: string
    description: string
    phoneNumber: string
    email: string
    website?: string | null
    logoUrl?: string | null
    categoryId: number
    ownerId: number
    addressId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    bookings?: BusinessBookingUncheckedCreateNestedManyWithoutBusinessInput
    Review?: ReviewUncheckedCreateNestedManyWithoutBusinessInput
    views?: VisitorBusinessViewUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutMediasInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutMediasInput, BusinessUncheckedCreateWithoutMediasInput>
  }

  export type BusinessUpsertWithoutMediasInput = {
    update: XOR<BusinessUpdateWithoutMediasInput, BusinessUncheckedUpdateWithoutMediasInput>
    create: XOR<BusinessCreateWithoutMediasInput, BusinessUncheckedCreateWithoutMediasInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutMediasInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutMediasInput, BusinessUncheckedUpdateWithoutMediasInput>
  }

  export type BusinessUpdateWithoutMediasInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    address?: AddressUpdateOneRequiredWithoutBusinessNestedInput
    category?: CategoryUpdateOneRequiredWithoutBusinessesNestedInput
    owner?: UserUpdateOneRequiredWithoutBusinessesNestedInput
    bookings?: BusinessBookingUpdateManyWithoutBusinessNestedInput
    Review?: ReviewUpdateManyWithoutBusinessNestedInput
    views?: VisitorBusinessViewUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutMediasInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    addressId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    bookings?: BusinessBookingUncheckedUpdateManyWithoutBusinessNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutBusinessNestedInput
    views?: VisitorBusinessViewUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessCreateWithoutAddressInput = {
    name: string
    description: string
    phoneNumber: string
    email: string
    website?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    category: CategoryCreateNestedOneWithoutBusinessesInput
    owner: UserCreateNestedOneWithoutBusinessesInput
    bookings?: BusinessBookingCreateNestedManyWithoutBusinessInput
    medias?: BusinessMediaCreateNestedManyWithoutBusinessInput
    Review?: ReviewCreateNestedManyWithoutBusinessInput
    views?: VisitorBusinessViewCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutAddressInput = {
    id?: number
    name: string
    description: string
    phoneNumber: string
    email: string
    website?: string | null
    logoUrl?: string | null
    categoryId: number
    ownerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    bookings?: BusinessBookingUncheckedCreateNestedManyWithoutBusinessInput
    medias?: BusinessMediaUncheckedCreateNestedManyWithoutBusinessInput
    Review?: ReviewUncheckedCreateNestedManyWithoutBusinessInput
    views?: VisitorBusinessViewUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutAddressInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutAddressInput, BusinessUncheckedCreateWithoutAddressInput>
  }

  export type BusinessUpsertWithoutAddressInput = {
    update: XOR<BusinessUpdateWithoutAddressInput, BusinessUncheckedUpdateWithoutAddressInput>
    create: XOR<BusinessCreateWithoutAddressInput, BusinessUncheckedCreateWithoutAddressInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutAddressInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutAddressInput, BusinessUncheckedUpdateWithoutAddressInput>
  }

  export type BusinessUpdateWithoutAddressInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutBusinessesNestedInput
    owner?: UserUpdateOneRequiredWithoutBusinessesNestedInput
    bookings?: BusinessBookingUpdateManyWithoutBusinessNestedInput
    medias?: BusinessMediaUpdateManyWithoutBusinessNestedInput
    Review?: ReviewUpdateManyWithoutBusinessNestedInput
    views?: VisitorBusinessViewUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    bookings?: BusinessBookingUncheckedUpdateManyWithoutBusinessNestedInput
    medias?: BusinessMediaUncheckedUpdateManyWithoutBusinessNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutBusinessNestedInput
    views?: VisitorBusinessViewUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessCreateWithoutOwnerInput = {
    name: string
    description: string
    phoneNumber: string
    email: string
    website?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    address: AddressCreateNestedOneWithoutBusinessInput
    category: CategoryCreateNestedOneWithoutBusinessesInput
    bookings?: BusinessBookingCreateNestedManyWithoutBusinessInput
    medias?: BusinessMediaCreateNestedManyWithoutBusinessInput
    Review?: ReviewCreateNestedManyWithoutBusinessInput
    views?: VisitorBusinessViewCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutOwnerInput = {
    id?: number
    name: string
    description: string
    phoneNumber: string
    email: string
    website?: string | null
    logoUrl?: string | null
    categoryId: number
    addressId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    bookings?: BusinessBookingUncheckedCreateNestedManyWithoutBusinessInput
    medias?: BusinessMediaUncheckedCreateNestedManyWithoutBusinessInput
    Review?: ReviewUncheckedCreateNestedManyWithoutBusinessInput
    views?: VisitorBusinessViewUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutOwnerInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutOwnerInput, BusinessUncheckedCreateWithoutOwnerInput>
  }

  export type BusinessCreateManyOwnerInputEnvelope = {
    data: BusinessCreateManyOwnerInput | BusinessCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type BusinessUpsertWithWhereUniqueWithoutOwnerInput = {
    where: BusinessWhereUniqueInput
    update: XOR<BusinessUpdateWithoutOwnerInput, BusinessUncheckedUpdateWithoutOwnerInput>
    create: XOR<BusinessCreateWithoutOwnerInput, BusinessUncheckedCreateWithoutOwnerInput>
  }

  export type BusinessUpdateWithWhereUniqueWithoutOwnerInput = {
    where: BusinessWhereUniqueInput
    data: XOR<BusinessUpdateWithoutOwnerInput, BusinessUncheckedUpdateWithoutOwnerInput>
  }

  export type BusinessUpdateManyWithWhereWithoutOwnerInput = {
    where: BusinessScalarWhereInput
    data: XOR<BusinessUpdateManyMutationInput, BusinessUncheckedUpdateManyWithoutOwnerInput>
  }

  export type BusinessCreateWithoutReviewInput = {
    name: string
    description: string
    phoneNumber: string
    email: string
    website?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    address: AddressCreateNestedOneWithoutBusinessInput
    category: CategoryCreateNestedOneWithoutBusinessesInput
    owner: UserCreateNestedOneWithoutBusinessesInput
    bookings?: BusinessBookingCreateNestedManyWithoutBusinessInput
    medias?: BusinessMediaCreateNestedManyWithoutBusinessInput
    views?: VisitorBusinessViewCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutReviewInput = {
    id?: number
    name: string
    description: string
    phoneNumber: string
    email: string
    website?: string | null
    logoUrl?: string | null
    categoryId: number
    ownerId: number
    addressId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    bookings?: BusinessBookingUncheckedCreateNestedManyWithoutBusinessInput
    medias?: BusinessMediaUncheckedCreateNestedManyWithoutBusinessInput
    views?: VisitorBusinessViewUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutReviewInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutReviewInput, BusinessUncheckedCreateWithoutReviewInput>
  }

  export type BusinessUpsertWithoutReviewInput = {
    update: XOR<BusinessUpdateWithoutReviewInput, BusinessUncheckedUpdateWithoutReviewInput>
    create: XOR<BusinessCreateWithoutReviewInput, BusinessUncheckedCreateWithoutReviewInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutReviewInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutReviewInput, BusinessUncheckedUpdateWithoutReviewInput>
  }

  export type BusinessUpdateWithoutReviewInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    address?: AddressUpdateOneRequiredWithoutBusinessNestedInput
    category?: CategoryUpdateOneRequiredWithoutBusinessesNestedInput
    owner?: UserUpdateOneRequiredWithoutBusinessesNestedInput
    bookings?: BusinessBookingUpdateManyWithoutBusinessNestedInput
    medias?: BusinessMediaUpdateManyWithoutBusinessNestedInput
    views?: VisitorBusinessViewUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    addressId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    bookings?: BusinessBookingUncheckedUpdateManyWithoutBusinessNestedInput
    medias?: BusinessMediaUncheckedUpdateManyWithoutBusinessNestedInput
    views?: VisitorBusinessViewUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessCreateWithoutBookingsInput = {
    name: string
    description: string
    phoneNumber: string
    email: string
    website?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    address: AddressCreateNestedOneWithoutBusinessInput
    category: CategoryCreateNestedOneWithoutBusinessesInput
    owner: UserCreateNestedOneWithoutBusinessesInput
    medias?: BusinessMediaCreateNestedManyWithoutBusinessInput
    Review?: ReviewCreateNestedManyWithoutBusinessInput
    views?: VisitorBusinessViewCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutBookingsInput = {
    id?: number
    name: string
    description: string
    phoneNumber: string
    email: string
    website?: string | null
    logoUrl?: string | null
    categoryId: number
    ownerId: number
    addressId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    medias?: BusinessMediaUncheckedCreateNestedManyWithoutBusinessInput
    Review?: ReviewUncheckedCreateNestedManyWithoutBusinessInput
    views?: VisitorBusinessViewUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutBookingsInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutBookingsInput, BusinessUncheckedCreateWithoutBookingsInput>
  }

  export type BusinessUpsertWithoutBookingsInput = {
    update: XOR<BusinessUpdateWithoutBookingsInput, BusinessUncheckedUpdateWithoutBookingsInput>
    create: XOR<BusinessCreateWithoutBookingsInput, BusinessUncheckedCreateWithoutBookingsInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutBookingsInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutBookingsInput, BusinessUncheckedUpdateWithoutBookingsInput>
  }

  export type BusinessUpdateWithoutBookingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    address?: AddressUpdateOneRequiredWithoutBusinessNestedInput
    category?: CategoryUpdateOneRequiredWithoutBusinessesNestedInput
    owner?: UserUpdateOneRequiredWithoutBusinessesNestedInput
    medias?: BusinessMediaUpdateManyWithoutBusinessNestedInput
    Review?: ReviewUpdateManyWithoutBusinessNestedInput
    views?: VisitorBusinessViewUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    addressId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    medias?: BusinessMediaUncheckedUpdateManyWithoutBusinessNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutBusinessNestedInput
    views?: VisitorBusinessViewUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type VisitorBusinessViewCreateWithoutVisitorInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    business: BusinessCreateNestedOneWithoutViewsInput
  }

  export type VisitorBusinessViewUncheckedCreateWithoutVisitorInput = {
    id?: number
    businessId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type VisitorBusinessViewCreateOrConnectWithoutVisitorInput = {
    where: VisitorBusinessViewWhereUniqueInput
    create: XOR<VisitorBusinessViewCreateWithoutVisitorInput, VisitorBusinessViewUncheckedCreateWithoutVisitorInput>
  }

  export type VisitorBusinessViewCreateManyVisitorInputEnvelope = {
    data: VisitorBusinessViewCreateManyVisitorInput | VisitorBusinessViewCreateManyVisitorInput[]
    skipDuplicates?: boolean
  }

  export type VisitorBusinessViewUpsertWithWhereUniqueWithoutVisitorInput = {
    where: VisitorBusinessViewWhereUniqueInput
    update: XOR<VisitorBusinessViewUpdateWithoutVisitorInput, VisitorBusinessViewUncheckedUpdateWithoutVisitorInput>
    create: XOR<VisitorBusinessViewCreateWithoutVisitorInput, VisitorBusinessViewUncheckedCreateWithoutVisitorInput>
  }

  export type VisitorBusinessViewUpdateWithWhereUniqueWithoutVisitorInput = {
    where: VisitorBusinessViewWhereUniqueInput
    data: XOR<VisitorBusinessViewUpdateWithoutVisitorInput, VisitorBusinessViewUncheckedUpdateWithoutVisitorInput>
  }

  export type VisitorBusinessViewUpdateManyWithWhereWithoutVisitorInput = {
    where: VisitorBusinessViewScalarWhereInput
    data: XOR<VisitorBusinessViewUpdateManyMutationInput, VisitorBusinessViewUncheckedUpdateManyWithoutVisitorInput>
  }

  export type VisitorCreateWithoutViewsInput = {
    mobile: string
    otp?: string | null
    otpExpiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type VisitorUncheckedCreateWithoutViewsInput = {
    id?: number
    mobile: string
    otp?: string | null
    otpExpiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type VisitorCreateOrConnectWithoutViewsInput = {
    where: VisitorWhereUniqueInput
    create: XOR<VisitorCreateWithoutViewsInput, VisitorUncheckedCreateWithoutViewsInput>
  }

  export type BusinessCreateWithoutViewsInput = {
    name: string
    description: string
    phoneNumber: string
    email: string
    website?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    address: AddressCreateNestedOneWithoutBusinessInput
    category: CategoryCreateNestedOneWithoutBusinessesInput
    owner: UserCreateNestedOneWithoutBusinessesInput
    bookings?: BusinessBookingCreateNestedManyWithoutBusinessInput
    medias?: BusinessMediaCreateNestedManyWithoutBusinessInput
    Review?: ReviewCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutViewsInput = {
    id?: number
    name: string
    description: string
    phoneNumber: string
    email: string
    website?: string | null
    logoUrl?: string | null
    categoryId: number
    ownerId: number
    addressId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    bookings?: BusinessBookingUncheckedCreateNestedManyWithoutBusinessInput
    medias?: BusinessMediaUncheckedCreateNestedManyWithoutBusinessInput
    Review?: ReviewUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutViewsInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutViewsInput, BusinessUncheckedCreateWithoutViewsInput>
  }

  export type VisitorUpsertWithoutViewsInput = {
    update: XOR<VisitorUpdateWithoutViewsInput, VisitorUncheckedUpdateWithoutViewsInput>
    create: XOR<VisitorCreateWithoutViewsInput, VisitorUncheckedCreateWithoutViewsInput>
    where?: VisitorWhereInput
  }

  export type VisitorUpdateToOneWithWhereWithoutViewsInput = {
    where?: VisitorWhereInput
    data: XOR<VisitorUpdateWithoutViewsInput, VisitorUncheckedUpdateWithoutViewsInput>
  }

  export type VisitorUpdateWithoutViewsInput = {
    mobile?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type VisitorUncheckedUpdateWithoutViewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    mobile?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessUpsertWithoutViewsInput = {
    update: XOR<BusinessUpdateWithoutViewsInput, BusinessUncheckedUpdateWithoutViewsInput>
    create: XOR<BusinessCreateWithoutViewsInput, BusinessUncheckedCreateWithoutViewsInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutViewsInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutViewsInput, BusinessUncheckedUpdateWithoutViewsInput>
  }

  export type BusinessUpdateWithoutViewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    address?: AddressUpdateOneRequiredWithoutBusinessNestedInput
    category?: CategoryUpdateOneRequiredWithoutBusinessesNestedInput
    owner?: UserUpdateOneRequiredWithoutBusinessesNestedInput
    bookings?: BusinessBookingUpdateManyWithoutBusinessNestedInput
    medias?: BusinessMediaUpdateManyWithoutBusinessNestedInput
    Review?: ReviewUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutViewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    addressId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    bookings?: BusinessBookingUncheckedUpdateManyWithoutBusinessNestedInput
    medias?: BusinessMediaUncheckedUpdateManyWithoutBusinessNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type CategoryCreateManyParentInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type BusinessCreateManyCategoryInput = {
    id?: number
    name: string
    description: string
    phoneNumber: string
    email: string
    website?: string | null
    logoUrl?: string | null
    ownerId: number
    addressId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type CategoryUpdateWithoutParentInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    children?: CategoryUpdateManyWithoutParentNestedInput
    businesses?: BusinessUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    businesses?: BusinessUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    address?: AddressUpdateOneRequiredWithoutBusinessNestedInput
    owner?: UserUpdateOneRequiredWithoutBusinessesNestedInput
    bookings?: BusinessBookingUpdateManyWithoutBusinessNestedInput
    medias?: BusinessMediaUpdateManyWithoutBusinessNestedInput
    Review?: ReviewUpdateManyWithoutBusinessNestedInput
    views?: VisitorBusinessViewUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
    addressId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    bookings?: BusinessBookingUncheckedUpdateManyWithoutBusinessNestedInput
    medias?: BusinessMediaUncheckedUpdateManyWithoutBusinessNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutBusinessNestedInput
    views?: VisitorBusinessViewUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
    addressId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessBookingCreateManyBusinessInput = {
    id?: number
    bookingStartTime: Date | string
    bookingEndTime: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type BusinessMediaCreateManyBusinessInput = {
    id?: number
    url: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type ReviewCreateManyBusinessInput = {
    id?: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type VisitorBusinessViewCreateManyBusinessInput = {
    id?: number
    visitorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type BusinessBookingUpdateWithoutBusinessInput = {
    bookingStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingEndTime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessBookingUncheckedUpdateWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingEndTime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessBookingUncheckedUpdateManyWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingEndTime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessMediaUpdateWithoutBusinessInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessMediaUncheckedUpdateWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessMediaUncheckedUpdateManyWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUpdateWithoutBusinessInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUncheckedUpdateWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUncheckedUpdateManyWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type VisitorBusinessViewUpdateWithoutBusinessInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    visitor?: VisitorUpdateOneRequiredWithoutViewsNestedInput
  }

  export type VisitorBusinessViewUncheckedUpdateWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    visitorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type VisitorBusinessViewUncheckedUpdateManyWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    visitorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessCreateManyOwnerInput = {
    id?: number
    name: string
    description: string
    phoneNumber: string
    email: string
    website?: string | null
    logoUrl?: string | null
    categoryId: number
    addressId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type BusinessUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    address?: AddressUpdateOneRequiredWithoutBusinessNestedInput
    category?: CategoryUpdateOneRequiredWithoutBusinessesNestedInput
    bookings?: BusinessBookingUpdateManyWithoutBusinessNestedInput
    medias?: BusinessMediaUpdateManyWithoutBusinessNestedInput
    Review?: ReviewUpdateManyWithoutBusinessNestedInput
    views?: VisitorBusinessViewUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    addressId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    bookings?: BusinessBookingUncheckedUpdateManyWithoutBusinessNestedInput
    medias?: BusinessMediaUncheckedUpdateManyWithoutBusinessNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutBusinessNestedInput
    views?: VisitorBusinessViewUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    addressId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type VisitorBusinessViewCreateManyVisitorInput = {
    id?: number
    businessId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type VisitorBusinessViewUpdateWithoutVisitorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    business?: BusinessUpdateOneRequiredWithoutViewsNestedInput
  }

  export type VisitorBusinessViewUncheckedUpdateWithoutVisitorInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type VisitorBusinessViewUncheckedUpdateManyWithoutVisitorInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
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