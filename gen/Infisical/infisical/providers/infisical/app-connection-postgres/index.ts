// https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/app_connection_postgres
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppConnectionPostgresConfig extends cdktf.TerraformMetaArguments {
  /**
  * The credentials for the PostgreSQL App Connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/app_connection_postgres#credentials AppConnectionPostgres#credentials}
  */
  readonly credentials: AppConnectionPostgresCredentials;
  /**
  * An optional description for the PostgreSQL App Connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/app_connection_postgres#description AppConnectionPostgres#description}
  */
  readonly description?: string;
  /**
  * The method used to authenticate with PostgreSQL. Possible values are: username-and-password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/app_connection_postgres#method AppConnectionPostgres#method}
  */
  readonly method: string;
  /**
  * The name of the PostgreSQL App Connection to create. Must be slug-friendly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/app_connection_postgres#name AppConnectionPostgres#name}
  */
  readonly name: string;
}
export interface AppConnectionPostgresCredentials {
  /**
  * The name of the database to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/app_connection_postgres#database AppConnectionPostgres#database}
  */
  readonly database: string;
  /**
  * The hostname of the database server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/app_connection_postgres#host AppConnectionPostgres#host}
  */
  readonly host: string;
  /**
  * The password to connect to the database with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/app_connection_postgres#password AppConnectionPostgres#password}
  */
  readonly password: string;
  /**
  * The port number of the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/app_connection_postgres#port AppConnectionPostgres#port}
  */
  readonly port?: number;
  /**
  * The SSL certificate to use for connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/app_connection_postgres#ssl_certificate AppConnectionPostgres#ssl_certificate}
  */
  readonly sslCertificate?: string;
  /**
  * Whether or not to use SSL when connecting to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/app_connection_postgres#ssl_enabled AppConnectionPostgres#ssl_enabled}
  */
  readonly sslEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to reject unauthorized SSL certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/app_connection_postgres#ssl_reject_unauthorized AppConnectionPostgres#ssl_reject_unauthorized}
  */
  readonly sslRejectUnauthorized?: boolean | cdktf.IResolvable;
  /**
  * The username to connect to the database with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/app_connection_postgres#username AppConnectionPostgres#username}
  */
  readonly username: string;
}

export function appConnectionPostgresCredentialsToTerraform(struct?: AppConnectionPostgresCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    ssl_certificate: cdktf.stringToTerraform(struct!.sslCertificate),
    ssl_enabled: cdktf.booleanToTerraform(struct!.sslEnabled),
    ssl_reject_unauthorized: cdktf.booleanToTerraform(struct!.sslRejectUnauthorized),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function appConnectionPostgresCredentialsToHclTerraform(struct?: AppConnectionPostgresCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_certificate: {
      value: cdktf.stringToHclTerraform(struct!.sslCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sslEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_reject_unauthorized: {
      value: cdktf.booleanToHclTerraform(struct!.sslRejectUnauthorized),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppConnectionPostgresCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppConnectionPostgresCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._sslCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCertificate = this._sslCertificate;
    }
    if (this._sslEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslEnabled = this._sslEnabled;
    }
    if (this._sslRejectUnauthorized !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslRejectUnauthorized = this._sslRejectUnauthorized;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppConnectionPostgresCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._host = undefined;
      this._password = undefined;
      this._port = undefined;
      this._sslCertificate = undefined;
      this._sslEnabled = undefined;
      this._sslRejectUnauthorized = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._host = value.host;
      this._password = value.password;
      this._port = value.port;
      this._sslCertificate = value.sslCertificate;
      this._sslEnabled = value.sslEnabled;
      this._sslRejectUnauthorized = value.sslRejectUnauthorized;
      this._username = value.username;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // ssl_certificate - computed: false, optional: true, required: false
  private _sslCertificate?: string; 
  public get sslCertificate() {
    return this.getStringAttribute('ssl_certificate');
  }
  public set sslCertificate(value: string) {
    this._sslCertificate = value;
  }
  public resetSslCertificate() {
    this._sslCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificateInput() {
    return this._sslCertificate;
  }

  // ssl_enabled - computed: true, optional: true, required: false
  private _sslEnabled?: boolean | cdktf.IResolvable; 
  public get sslEnabled() {
    return this.getBooleanAttribute('ssl_enabled');
  }
  public set sslEnabled(value: boolean | cdktf.IResolvable) {
    this._sslEnabled = value;
  }
  public resetSslEnabled() {
    this._sslEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnabledInput() {
    return this._sslEnabled;
  }

  // ssl_reject_unauthorized - computed: true, optional: true, required: false
  private _sslRejectUnauthorized?: boolean | cdktf.IResolvable; 
  public get sslRejectUnauthorized() {
    return this.getBooleanAttribute('ssl_reject_unauthorized');
  }
  public set sslRejectUnauthorized(value: boolean | cdktf.IResolvable) {
    this._sslRejectUnauthorized = value;
  }
  public resetSslRejectUnauthorized() {
    this._sslRejectUnauthorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslRejectUnauthorizedInput() {
    return this._sslRejectUnauthorized;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/app_connection_postgres infisical_app_connection_postgres}
*/
export class AppConnectionPostgres extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_app_connection_postgres";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppConnectionPostgres resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppConnectionPostgres to import
  * @param importFromId The id of the existing AppConnectionPostgres that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/app_connection_postgres#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppConnectionPostgres to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_app_connection_postgres", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/app_connection_postgres infisical_app_connection_postgres} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppConnectionPostgresConfig
  */
  public constructor(scope: Construct, id: string, config: AppConnectionPostgresConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_app_connection_postgres',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.15.41'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._credentials.internalValue = config.credentials;
    this._description = config.description;
    this._method = config.method;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credentials - computed: false, optional: false, required: true
  private _credentials = new AppConnectionPostgresCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: AppConnectionPostgresCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // credentials_hash - computed: true, optional: false, required: false
  public get credentialsHash() {
    return this.getStringAttribute('credentials_hash');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credentials: appConnectionPostgresCredentialsToTerraform(this._credentials.internalValue),
      description: cdktf.stringToTerraform(this._description),
      method: cdktf.stringToTerraform(this._method),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credentials: {
        value: appConnectionPostgresCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppConnectionPostgresCredentials",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      method: {
        value: cdktf.stringToHclTerraform(this._method),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
