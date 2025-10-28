// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MongodbInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#account_password MongodbInstance#account_password}
  */
  readonly accountPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#audit_status MongodbInstance#audit_status}
  */
  readonly auditStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#backup_period MongodbInstance#backup_period}
  */
  readonly backupPeriod?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#backup_time MongodbInstance#backup_time}
  */
  readonly backupTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#db_instance_class MongodbInstance#db_instance_class}
  */
  readonly dbInstanceClass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#db_instance_description MongodbInstance#db_instance_description}
  */
  readonly dbInstanceDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#db_instance_storage MongodbInstance#db_instance_storage}
  */
  readonly dbInstanceStorage: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#enable_public_connection MongodbInstance#enable_public_connection}
  */
  readonly enablePublicConnection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#engine_version MongodbInstance#engine_version}
  */
  readonly engineVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#id MongodbInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#instance_charge_type MongodbInstance#instance_charge_type}
  */
  readonly instanceChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#kms_encrypted_password MongodbInstance#kms_encrypted_password}
  */
  readonly kmsEncryptedPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#kms_encryption_context MongodbInstance#kms_encryption_context}
  */
  readonly kmsEncryptionContext?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#maintain_end_time MongodbInstance#maintain_end_time}
  */
  readonly maintainEndTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#maintain_start_time MongodbInstance#maintain_start_time}
  */
  readonly maintainStartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#name MongodbInstance#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#period MongodbInstance#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#preferred_backup_period MongodbInstance#preferred_backup_period}
  */
  readonly preferredBackupPeriod?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#preferred_backup_time MongodbInstance#preferred_backup_time}
  */
  readonly preferredBackupTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#replication_factor MongodbInstance#replication_factor}
  */
  readonly replicationFactor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#security_ip_list MongodbInstance#security_ip_list}
  */
  readonly securityIpList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#ssl_action MongodbInstance#ssl_action}
  */
  readonly sslAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#storage_engine MongodbInstance#storage_engine}
  */
  readonly storageEngine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#tde_status MongodbInstance#tde_status}
  */
  readonly tdeStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#vswitch_id MongodbInstance#vswitch_id}
  */
  readonly vswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#zone_id MongodbInstance#zone_id}
  */
  readonly zoneId?: string;
  /**
  * audit_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#audit_filter MongodbInstance#audit_filter}
  */
  readonly auditFilter?: MongodbInstanceAuditFilter[] | cdktf.IResolvable;
  /**
  * private_connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#private_connections MongodbInstance#private_connections}
  */
  readonly privateConnections?: MongodbInstancePrivateConnections[] | cdktf.IResolvable;
  /**
  * public_connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#public_connections MongodbInstance#public_connections}
  */
  readonly publicConnections?: MongodbInstancePublicConnections[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#timeouts MongodbInstance#timeouts}
  */
  readonly timeouts?: MongodbInstanceTimeouts;
}
export interface MongodbInstanceAuditFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#filters MongodbInstance#filters}
  */
  readonly filters: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#role_type MongodbInstance#role_type}
  */
  readonly roleType: string;
}

export function mongodbInstanceAuditFilterToTerraform(struct?: MongodbInstanceAuditFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filters),
    role_type: cdktf.stringToTerraform(struct!.roleType),
  }
}


export function mongodbInstanceAuditFilterToHclTerraform(struct?: MongodbInstanceAuditFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filters),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    role_type: {
      value: cdktf.stringToHclTerraform(struct!.roleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MongodbInstanceAuditFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MongodbInstanceAuditFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filters !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters;
    }
    if (this._roleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleType = this._roleType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MongodbInstanceAuditFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filters = undefined;
      this._roleType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filters = value.filters;
      this._roleType = value.roleType;
    }
  }

  // filters - computed: false, optional: false, required: true
  private _filters?: string[]; 
  public get filters() {
    return cdktf.Fn.tolist(this.getListAttribute('filters'));
  }
  public set filters(value: string[]) {
    this._filters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // role_type - computed: false, optional: false, required: true
  private _roleType?: string; 
  public get roleType() {
    return this.getStringAttribute('role_type');
  }
  public set roleType(value: string) {
    this._roleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleTypeInput() {
    return this._roleType;
  }
}

export class MongodbInstanceAuditFilterList extends cdktf.ComplexList {
  public internalValue? : MongodbInstanceAuditFilter[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MongodbInstanceAuditFilterOutputReference {
    return new MongodbInstanceAuditFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MongodbInstancePrivateConnections {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#connect_port MongodbInstance#connect_port}
  */
  readonly connectPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#connect_string_prefix MongodbInstance#connect_string_prefix}
  */
  readonly connectStringPrefix?: string;
}

export function mongodbInstancePrivateConnectionsToTerraform(struct?: MongodbInstancePrivateConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect_port: cdktf.numberToTerraform(struct!.connectPort),
    connect_string_prefix: cdktf.stringToTerraform(struct!.connectStringPrefix),
  }
}


export function mongodbInstancePrivateConnectionsToHclTerraform(struct?: MongodbInstancePrivateConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect_port: {
      value: cdktf.numberToHclTerraform(struct!.connectPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connect_string_prefix: {
      value: cdktf.stringToHclTerraform(struct!.connectStringPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MongodbInstancePrivateConnectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MongodbInstancePrivateConnections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectPort = this._connectPort;
    }
    if (this._connectStringPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectStringPrefix = this._connectStringPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MongodbInstancePrivateConnections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectPort = undefined;
      this._connectStringPrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectPort = value.connectPort;
      this._connectStringPrefix = value.connectStringPrefix;
    }
  }

  // connect_port - computed: true, optional: true, required: false
  private _connectPort?: number; 
  public get connectPort() {
    return this.getNumberAttribute('connect_port');
  }
  public set connectPort(value: number) {
    this._connectPort = value;
  }
  public resetConnectPort() {
    this._connectPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectPortInput() {
    return this._connectPort;
  }

  // connect_string - computed: true, optional: false, required: false
  public get connectString() {
    return this.getStringAttribute('connect_string');
  }

  // connect_string_prefix - computed: true, optional: true, required: false
  private _connectStringPrefix?: string; 
  public get connectStringPrefix() {
    return this.getStringAttribute('connect_string_prefix');
  }
  public set connectStringPrefix(value: string) {
    this._connectStringPrefix = value;
  }
  public resetConnectStringPrefix() {
    this._connectStringPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectStringPrefixInput() {
    return this._connectStringPrefix;
  }
}

export class MongodbInstancePrivateConnectionsList extends cdktf.ComplexList {
  public internalValue? : MongodbInstancePrivateConnections[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MongodbInstancePrivateConnectionsOutputReference {
    return new MongodbInstancePrivateConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MongodbInstancePublicConnections {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#connect_port MongodbInstance#connect_port}
  */
  readonly connectPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#connect_string_prefix MongodbInstance#connect_string_prefix}
  */
  readonly connectStringPrefix?: string;
}

export function mongodbInstancePublicConnectionsToTerraform(struct?: MongodbInstancePublicConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect_port: cdktf.numberToTerraform(struct!.connectPort),
    connect_string_prefix: cdktf.stringToTerraform(struct!.connectStringPrefix),
  }
}


export function mongodbInstancePublicConnectionsToHclTerraform(struct?: MongodbInstancePublicConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect_port: {
      value: cdktf.numberToHclTerraform(struct!.connectPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connect_string_prefix: {
      value: cdktf.stringToHclTerraform(struct!.connectStringPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MongodbInstancePublicConnectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MongodbInstancePublicConnections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectPort = this._connectPort;
    }
    if (this._connectStringPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectStringPrefix = this._connectStringPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MongodbInstancePublicConnections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectPort = undefined;
      this._connectStringPrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectPort = value.connectPort;
      this._connectStringPrefix = value.connectStringPrefix;
    }
  }

  // connect_port - computed: true, optional: true, required: false
  private _connectPort?: number; 
  public get connectPort() {
    return this.getNumberAttribute('connect_port');
  }
  public set connectPort(value: number) {
    this._connectPort = value;
  }
  public resetConnectPort() {
    this._connectPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectPortInput() {
    return this._connectPort;
  }

  // connect_string - computed: true, optional: false, required: false
  public get connectString() {
    return this.getStringAttribute('connect_string');
  }

  // connect_string_prefix - computed: true, optional: true, required: false
  private _connectStringPrefix?: string; 
  public get connectStringPrefix() {
    return this.getStringAttribute('connect_string_prefix');
  }
  public set connectStringPrefix(value: string) {
    this._connectStringPrefix = value;
  }
  public resetConnectStringPrefix() {
    this._connectStringPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectStringPrefixInput() {
    return this._connectStringPrefix;
  }
}

export class MongodbInstancePublicConnectionsList extends cdktf.ComplexList {
  public internalValue? : MongodbInstancePublicConnections[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MongodbInstancePublicConnectionsOutputReference {
    return new MongodbInstancePublicConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MongodbInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#create MongodbInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#delete MongodbInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#update MongodbInstance#update}
  */
  readonly update?: string;
}

export function mongodbInstanceTimeoutsToTerraform(struct?: MongodbInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function mongodbInstanceTimeoutsToHclTerraform(struct?: MongodbInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MongodbInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MongodbInstanceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MongodbInstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance alibabacloudstack_mongodb_instance}
*/
export class MongodbInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_mongodb_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MongodbInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MongodbInstance to import
  * @param importFromId The id of the existing MongodbInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MongodbInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_mongodb_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_instance alibabacloudstack_mongodb_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MongodbInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: MongodbInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_mongodb_instance',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.18'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountPassword = config.accountPassword;
    this._auditStatus = config.auditStatus;
    this._backupPeriod = config.backupPeriod;
    this._backupTime = config.backupTime;
    this._dbInstanceClass = config.dbInstanceClass;
    this._dbInstanceDescription = config.dbInstanceDescription;
    this._dbInstanceStorage = config.dbInstanceStorage;
    this._enablePublicConnection = config.enablePublicConnection;
    this._engineVersion = config.engineVersion;
    this._id = config.id;
    this._instanceChargeType = config.instanceChargeType;
    this._kmsEncryptedPassword = config.kmsEncryptedPassword;
    this._kmsEncryptionContext = config.kmsEncryptionContext;
    this._maintainEndTime = config.maintainEndTime;
    this._maintainStartTime = config.maintainStartTime;
    this._name = config.name;
    this._period = config.period;
    this._preferredBackupPeriod = config.preferredBackupPeriod;
    this._preferredBackupTime = config.preferredBackupTime;
    this._replicationFactor = config.replicationFactor;
    this._securityIpList = config.securityIpList;
    this._sslAction = config.sslAction;
    this._storageEngine = config.storageEngine;
    this._tdeStatus = config.tdeStatus;
    this._vswitchId = config.vswitchId;
    this._zoneId = config.zoneId;
    this._auditFilter.internalValue = config.auditFilter;
    this._privateConnections.internalValue = config.privateConnections;
    this._publicConnections.internalValue = config.publicConnections;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_password - computed: false, optional: true, required: false
  private _accountPassword?: string; 
  public get accountPassword() {
    return this.getStringAttribute('account_password');
  }
  public set accountPassword(value: string) {
    this._accountPassword = value;
  }
  public resetAccountPassword() {
    this._accountPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountPasswordInput() {
    return this._accountPassword;
  }

  // audit_status - computed: true, optional: true, required: false
  private _auditStatus?: string; 
  public get auditStatus() {
    return this.getStringAttribute('audit_status');
  }
  public set auditStatus(value: string) {
    this._auditStatus = value;
  }
  public resetAuditStatus() {
    this._auditStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditStatusInput() {
    return this._auditStatus;
  }

  // backup_period - computed: true, optional: true, required: false
  private _backupPeriod?: string[]; 
  public get backupPeriod() {
    return cdktf.Fn.tolist(this.getListAttribute('backup_period'));
  }
  public set backupPeriod(value: string[]) {
    this._backupPeriod = value;
  }
  public resetBackupPeriod() {
    this._backupPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPeriodInput() {
    return this._backupPeriod;
  }

  // backup_time - computed: true, optional: true, required: false
  private _backupTime?: string; 
  public get backupTime() {
    return this.getStringAttribute('backup_time');
  }
  public set backupTime(value: string) {
    this._backupTime = value;
  }
  public resetBackupTime() {
    this._backupTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTimeInput() {
    return this._backupTime;
  }

  // db_instance_class - computed: false, optional: false, required: true
  private _dbInstanceClass?: string; 
  public get dbInstanceClass() {
    return this.getStringAttribute('db_instance_class');
  }
  public set dbInstanceClass(value: string) {
    this._dbInstanceClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceClassInput() {
    return this._dbInstanceClass;
  }

  // db_instance_description - computed: true, optional: true, required: false
  private _dbInstanceDescription?: string; 
  public get dbInstanceDescription() {
    return this.getStringAttribute('db_instance_description');
  }
  public set dbInstanceDescription(value: string) {
    this._dbInstanceDescription = value;
  }
  public resetDbInstanceDescription() {
    this._dbInstanceDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceDescriptionInput() {
    return this._dbInstanceDescription;
  }

  // db_instance_storage - computed: false, optional: false, required: true
  private _dbInstanceStorage?: number; 
  public get dbInstanceStorage() {
    return this.getNumberAttribute('db_instance_storage');
  }
  public set dbInstanceStorage(value: number) {
    this._dbInstanceStorage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceStorageInput() {
    return this._dbInstanceStorage;
  }

  // enable_public_connection - computed: false, optional: true, required: false
  private _enablePublicConnection?: boolean | cdktf.IResolvable; 
  public get enablePublicConnection() {
    return this.getBooleanAttribute('enable_public_connection');
  }
  public set enablePublicConnection(value: boolean | cdktf.IResolvable) {
    this._enablePublicConnection = value;
  }
  public resetEnablePublicConnection() {
    this._enablePublicConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePublicConnectionInput() {
    return this._enablePublicConnection;
  }

  // engine_version - computed: false, optional: false, required: true
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // instance_charge_type - computed: false, optional: true, required: false
  private _instanceChargeType?: string; 
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }
  public set instanceChargeType(value: string) {
    this._instanceChargeType = value;
  }
  public resetInstanceChargeType() {
    this._instanceChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypeInput() {
    return this._instanceChargeType;
  }

  // kms_encrypted_password - computed: false, optional: true, required: false
  private _kmsEncryptedPassword?: string; 
  public get kmsEncryptedPassword() {
    return this.getStringAttribute('kms_encrypted_password');
  }
  public set kmsEncryptedPassword(value: string) {
    this._kmsEncryptedPassword = value;
  }
  public resetKmsEncryptedPassword() {
    this._kmsEncryptedPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsEncryptedPasswordInput() {
    return this._kmsEncryptedPassword;
  }

  // kms_encryption_context - computed: false, optional: true, required: false
  private _kmsEncryptionContext?: { [key: string]: string }; 
  public get kmsEncryptionContext() {
    return this.getStringMapAttribute('kms_encryption_context');
  }
  public set kmsEncryptionContext(value: { [key: string]: string }) {
    this._kmsEncryptionContext = value;
  }
  public resetKmsEncryptionContext() {
    this._kmsEncryptionContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsEncryptionContextInput() {
    return this._kmsEncryptionContext;
  }

  // maintain_end_time - computed: true, optional: true, required: false
  private _maintainEndTime?: string; 
  public get maintainEndTime() {
    return this.getStringAttribute('maintain_end_time');
  }
  public set maintainEndTime(value: string) {
    this._maintainEndTime = value;
  }
  public resetMaintainEndTime() {
    this._maintainEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainEndTimeInput() {
    return this._maintainEndTime;
  }

  // maintain_start_time - computed: true, optional: true, required: false
  private _maintainStartTime?: string; 
  public get maintainStartTime() {
    return this.getStringAttribute('maintain_start_time');
  }
  public set maintainStartTime(value: string) {
    this._maintainStartTime = value;
  }
  public resetMaintainStartTime() {
    this._maintainStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainStartTimeInput() {
    return this._maintainStartTime;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // period - computed: true, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // preferred_backup_period - computed: true, optional: true, required: false
  private _preferredBackupPeriod?: string[]; 
  public get preferredBackupPeriod() {
    return cdktf.Fn.tolist(this.getListAttribute('preferred_backup_period'));
  }
  public set preferredBackupPeriod(value: string[]) {
    this._preferredBackupPeriod = value;
  }
  public resetPreferredBackupPeriod() {
    this._preferredBackupPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredBackupPeriodInput() {
    return this._preferredBackupPeriod;
  }

  // preferred_backup_time - computed: true, optional: true, required: false
  private _preferredBackupTime?: string; 
  public get preferredBackupTime() {
    return this.getStringAttribute('preferred_backup_time');
  }
  public set preferredBackupTime(value: string) {
    this._preferredBackupTime = value;
  }
  public resetPreferredBackupTime() {
    this._preferredBackupTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredBackupTimeInput() {
    return this._preferredBackupTime;
  }

  // replica_set_name - computed: true, optional: false, required: false
  public get replicaSetName() {
    return this.getStringAttribute('replica_set_name');
  }

  // replication_factor - computed: true, optional: true, required: false
  private _replicationFactor?: number; 
  public get replicationFactor() {
    return this.getNumberAttribute('replication_factor');
  }
  public set replicationFactor(value: number) {
    this._replicationFactor = value;
  }
  public resetReplicationFactor() {
    this._replicationFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationFactorInput() {
    return this._replicationFactor;
  }

  // retention_period - computed: true, optional: false, required: false
  public get retentionPeriod() {
    return this.getNumberAttribute('retention_period');
  }

  // security_ip_list - computed: true, optional: true, required: false
  private _securityIpList?: string[]; 
  public get securityIpList() {
    return cdktf.Fn.tolist(this.getListAttribute('security_ip_list'));
  }
  public set securityIpList(value: string[]) {
    this._securityIpList = value;
  }
  public resetSecurityIpList() {
    this._securityIpList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityIpListInput() {
    return this._securityIpList;
  }

  // ssl_action - computed: false, optional: true, required: false
  private _sslAction?: string; 
  public get sslAction() {
    return this.getStringAttribute('ssl_action');
  }
  public set sslAction(value: string) {
    this._sslAction = value;
  }
  public resetSslAction() {
    this._sslAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslActionInput() {
    return this._sslAction;
  }

  // storage_engine - computed: true, optional: true, required: false
  private _storageEngine?: string; 
  public get storageEngine() {
    return this.getStringAttribute('storage_engine');
  }
  public set storageEngine(value: string) {
    this._storageEngine = value;
  }
  public resetStorageEngine() {
    this._storageEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageEngineInput() {
    return this._storageEngine;
  }

  // tde_status - computed: false, optional: true, required: false
  private _tdeStatus?: string; 
  public get tdeStatus() {
    return this.getStringAttribute('tde_status');
  }
  public set tdeStatus(value: string) {
    this._tdeStatus = value;
  }
  public resetTdeStatus() {
    this._tdeStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdeStatusInput() {
    return this._tdeStatus;
  }

  // vswitch_id - computed: true, optional: true, required: false
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  public resetVswitchId() {
    this._vswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // zone_id - computed: true, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // audit_filter - computed: false, optional: true, required: false
  private _auditFilter = new MongodbInstanceAuditFilterList(this, "audit_filter", true);
  public get auditFilter() {
    return this._auditFilter;
  }
  public putAuditFilter(value: MongodbInstanceAuditFilter[] | cdktf.IResolvable) {
    this._auditFilter.internalValue = value;
  }
  public resetAuditFilter() {
    this._auditFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditFilterInput() {
    return this._auditFilter.internalValue;
  }

  // private_connections - computed: false, optional: true, required: false
  private _privateConnections = new MongodbInstancePrivateConnectionsList(this, "private_connections", true);
  public get privateConnections() {
    return this._privateConnections;
  }
  public putPrivateConnections(value: MongodbInstancePrivateConnections[] | cdktf.IResolvable) {
    this._privateConnections.internalValue = value;
  }
  public resetPrivateConnections() {
    this._privateConnections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateConnectionsInput() {
    return this._privateConnections.internalValue;
  }

  // public_connections - computed: false, optional: true, required: false
  private _publicConnections = new MongodbInstancePublicConnectionsList(this, "public_connections", true);
  public get publicConnections() {
    return this._publicConnections;
  }
  public putPublicConnections(value: MongodbInstancePublicConnections[] | cdktf.IResolvable) {
    this._publicConnections.internalValue = value;
  }
  public resetPublicConnections() {
    this._publicConnections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicConnectionsInput() {
    return this._publicConnections.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MongodbInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MongodbInstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_password: cdktf.stringToTerraform(this._accountPassword),
      audit_status: cdktf.stringToTerraform(this._auditStatus),
      backup_period: cdktf.listMapper(cdktf.stringToTerraform, false)(this._backupPeriod),
      backup_time: cdktf.stringToTerraform(this._backupTime),
      db_instance_class: cdktf.stringToTerraform(this._dbInstanceClass),
      db_instance_description: cdktf.stringToTerraform(this._dbInstanceDescription),
      db_instance_storage: cdktf.numberToTerraform(this._dbInstanceStorage),
      enable_public_connection: cdktf.booleanToTerraform(this._enablePublicConnection),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      id: cdktf.stringToTerraform(this._id),
      instance_charge_type: cdktf.stringToTerraform(this._instanceChargeType),
      kms_encrypted_password: cdktf.stringToTerraform(this._kmsEncryptedPassword),
      kms_encryption_context: cdktf.hashMapper(cdktf.stringToTerraform)(this._kmsEncryptionContext),
      maintain_end_time: cdktf.stringToTerraform(this._maintainEndTime),
      maintain_start_time: cdktf.stringToTerraform(this._maintainStartTime),
      name: cdktf.stringToTerraform(this._name),
      period: cdktf.numberToTerraform(this._period),
      preferred_backup_period: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preferredBackupPeriod),
      preferred_backup_time: cdktf.stringToTerraform(this._preferredBackupTime),
      replication_factor: cdktf.numberToTerraform(this._replicationFactor),
      security_ip_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityIpList),
      ssl_action: cdktf.stringToTerraform(this._sslAction),
      storage_engine: cdktf.stringToTerraform(this._storageEngine),
      tde_status: cdktf.stringToTerraform(this._tdeStatus),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      audit_filter: cdktf.listMapper(mongodbInstanceAuditFilterToTerraform, true)(this._auditFilter.internalValue),
      private_connections: cdktf.listMapper(mongodbInstancePrivateConnectionsToTerraform, true)(this._privateConnections.internalValue),
      public_connections: cdktf.listMapper(mongodbInstancePublicConnectionsToTerraform, true)(this._publicConnections.internalValue),
      timeouts: mongodbInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_password: {
        value: cdktf.stringToHclTerraform(this._accountPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audit_status: {
        value: cdktf.stringToHclTerraform(this._auditStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_period: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._backupPeriod),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      backup_time: {
        value: cdktf.stringToHclTerraform(this._backupTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_class: {
        value: cdktf.stringToHclTerraform(this._dbInstanceClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_description: {
        value: cdktf.stringToHclTerraform(this._dbInstanceDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_storage: {
        value: cdktf.numberToHclTerraform(this._dbInstanceStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_public_connection: {
        value: cdktf.booleanToHclTerraform(this._enablePublicConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      engine_version: {
        value: cdktf.stringToHclTerraform(this._engineVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_charge_type: {
        value: cdktf.stringToHclTerraform(this._instanceChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_encrypted_password: {
        value: cdktf.stringToHclTerraform(this._kmsEncryptedPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_encryption_context: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._kmsEncryptionContext),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      maintain_end_time: {
        value: cdktf.stringToHclTerraform(this._maintainEndTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintain_start_time: {
        value: cdktf.stringToHclTerraform(this._maintainStartTime),
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
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      preferred_backup_period: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preferredBackupPeriod),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      preferred_backup_time: {
        value: cdktf.stringToHclTerraform(this._preferredBackupTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_factor: {
        value: cdktf.numberToHclTerraform(this._replicationFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_ip_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityIpList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ssl_action: {
        value: cdktf.stringToHclTerraform(this._sslAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_engine: {
        value: cdktf.stringToHclTerraform(this._storageEngine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tde_status: {
        value: cdktf.stringToHclTerraform(this._tdeStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audit_filter: {
        value: cdktf.listMapperHcl(mongodbInstanceAuditFilterToHclTerraform, true)(this._auditFilter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MongodbInstanceAuditFilterList",
      },
      private_connections: {
        value: cdktf.listMapperHcl(mongodbInstancePrivateConnectionsToHclTerraform, true)(this._privateConnections.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MongodbInstancePrivateConnectionsList",
      },
      public_connections: {
        value: cdktf.listMapperHcl(mongodbInstancePublicConnectionsToHclTerraform, true)(this._publicConnections.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MongodbInstancePublicConnectionsList",
      },
      timeouts: {
        value: mongodbInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MongodbInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
