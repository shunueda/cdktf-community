// https://registry.terraform.io/providers/drfaust92/google/4.16.4/docs/resources/memcache_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MemcacheInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The full name of the GCE network to connect the instance to.  If not provided,
  * 'default' will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/google/4.16.4/docs/resources/memcache_instance#authorized_network MemcacheInstance#authorized_network}
  */
  readonly authorizedNetwork?: string;
  /**
  * A user-visible name for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/google/4.16.4/docs/resources/memcache_instance#display_name MemcacheInstance#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/google/4.16.4/docs/resources/memcache_instance#id MemcacheInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource labels to represent user-provided metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/google/4.16.4/docs/resources/memcache_instance#labels MemcacheInstance#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The major version of Memcached software. If not provided, latest supported version will be used.
  * Currently the latest supported major version is MEMCACHE_1_5. The minor version will be automatically
  * determined by our system based on the latest supported minor version. Default value: "MEMCACHE_1_5" Possible values: ["MEMCACHE_1_5"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/google/4.16.4/docs/resources/memcache_instance#memcache_version MemcacheInstance#memcache_version}
  */
  readonly memcacheVersion?: string;
  /**
  * The resource name of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/google/4.16.4/docs/resources/memcache_instance#name MemcacheInstance#name}
  */
  readonly name: string;
  /**
  * Number of nodes in the memcache instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/google/4.16.4/docs/resources/memcache_instance#node_count MemcacheInstance#node_count}
  */
  readonly nodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/google/4.16.4/docs/resources/memcache_instance#project MemcacheInstance#project}
  */
  readonly project?: string;
  /**
  * The region of the Memcache instance. If it is not provided, the provider region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/google/4.16.4/docs/resources/memcache_instance#region MemcacheInstance#region}
  */
  readonly region?: string;
  /**
  * Zones where memcache nodes should be provisioned.  If not
  * provided, all zones will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/google/4.16.4/docs/resources/memcache_instance#zones MemcacheInstance#zones}
  */
  readonly zones?: string[];
  /**
  * memcache_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/google/4.16.4/docs/resources/memcache_instance#memcache_parameters MemcacheInstance#memcache_parameters}
  */
  readonly memcacheParameters?: MemcacheInstanceMemcacheParameters;
  /**
  * node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/google/4.16.4/docs/resources/memcache_instance#node_config MemcacheInstance#node_config}
  */
  readonly nodeConfig: MemcacheInstanceNodeConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/google/4.16.4/docs/resources/memcache_instance#timeouts MemcacheInstance#timeouts}
  */
  readonly timeouts?: MemcacheInstanceTimeouts;
}
export interface MemcacheInstanceMemcacheNodes {
}

export function memcacheInstanceMemcacheNodesToTerraform(struct?: MemcacheInstanceMemcacheNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function memcacheInstanceMemcacheNodesToHclTerraform(struct?: MemcacheInstanceMemcacheNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MemcacheInstanceMemcacheNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MemcacheInstanceMemcacheNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MemcacheInstanceMemcacheNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class MemcacheInstanceMemcacheNodesList extends cdktf.ComplexList {

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
  public get(index: number): MemcacheInstanceMemcacheNodesOutputReference {
    return new MemcacheInstanceMemcacheNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MemcacheInstanceMemcacheParameters {
  /**
  * User-defined set of parameters to use in the memcache process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/google/4.16.4/docs/resources/memcache_instance#params MemcacheInstance#params}
  */
  readonly params?: { [key: string]: string };
}

export function memcacheInstanceMemcacheParametersToTerraform(struct?: MemcacheInstanceMemcacheParametersOutputReference | MemcacheInstanceMemcacheParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.params),
  }
}


export function memcacheInstanceMemcacheParametersToHclTerraform(struct?: MemcacheInstanceMemcacheParametersOutputReference | MemcacheInstanceMemcacheParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.params),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MemcacheInstanceMemcacheParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MemcacheInstanceMemcacheParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._params !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MemcacheInstanceMemcacheParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._params = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._params = value.params;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // params - computed: false, optional: true, required: false
  private _params?: { [key: string]: string }; 
  public get params() {
    return this.getStringMapAttribute('params');
  }
  public set params(value: { [key: string]: string }) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
  }
}
export interface MemcacheInstanceNodeConfig {
  /**
  * Number of CPUs per node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/google/4.16.4/docs/resources/memcache_instance#cpu_count MemcacheInstance#cpu_count}
  */
  readonly cpuCount: number;
  /**
  * Memory size in Mebibytes for each memcache node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/google/4.16.4/docs/resources/memcache_instance#memory_size_mb MemcacheInstance#memory_size_mb}
  */
  readonly memorySizeMb: number;
}

export function memcacheInstanceNodeConfigToTerraform(struct?: MemcacheInstanceNodeConfigOutputReference | MemcacheInstanceNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
    memory_size_mb: cdktf.numberToTerraform(struct!.memorySizeMb),
  }
}


export function memcacheInstanceNodeConfigToHclTerraform(struct?: MemcacheInstanceNodeConfigOutputReference | MemcacheInstanceNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_count: {
      value: cdktf.numberToHclTerraform(struct!.cpuCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_size_mb: {
      value: cdktf.numberToHclTerraform(struct!.memorySizeMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MemcacheInstanceNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MemcacheInstanceNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCount = this._cpuCount;
    }
    if (this._memorySizeMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memorySizeMb = this._memorySizeMb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MemcacheInstanceNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuCount = undefined;
      this._memorySizeMb = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuCount = value.cpuCount;
      this._memorySizeMb = value.memorySizeMb;
    }
  }

  // cpu_count - computed: false, optional: false, required: true
  private _cpuCount?: number; 
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }
  public set cpuCount(value: number) {
    this._cpuCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCountInput() {
    return this._cpuCount;
  }

  // memory_size_mb - computed: false, optional: false, required: true
  private _memorySizeMb?: number; 
  public get memorySizeMb() {
    return this.getNumberAttribute('memory_size_mb');
  }
  public set memorySizeMb(value: number) {
    this._memorySizeMb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeMbInput() {
    return this._memorySizeMb;
  }
}
export interface MemcacheInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/google/4.16.4/docs/resources/memcache_instance#create MemcacheInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/google/4.16.4/docs/resources/memcache_instance#delete MemcacheInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/google/4.16.4/docs/resources/memcache_instance#update MemcacheInstance#update}
  */
  readonly update?: string;
}

export function memcacheInstanceTimeoutsToTerraform(struct?: MemcacheInstanceTimeouts | cdktf.IResolvable): any {
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


export function memcacheInstanceTimeoutsToHclTerraform(struct?: MemcacheInstanceTimeouts | cdktf.IResolvable): any {
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

export class MemcacheInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MemcacheInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MemcacheInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/drfaust92/google/4.16.4/docs/resources/memcache_instance google_memcache_instance}
*/
export class MemcacheInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_memcache_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MemcacheInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MemcacheInstance to import
  * @param importFromId The id of the existing MemcacheInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/drfaust92/google/4.16.4/docs/resources/memcache_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MemcacheInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_memcache_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/drfaust92/google/4.16.4/docs/resources/memcache_instance google_memcache_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MemcacheInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: MemcacheInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_memcache_instance',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.16.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authorizedNetwork = config.authorizedNetwork;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._memcacheVersion = config.memcacheVersion;
    this._name = config.name;
    this._nodeCount = config.nodeCount;
    this._project = config.project;
    this._region = config.region;
    this._zones = config.zones;
    this._memcacheParameters.internalValue = config.memcacheParameters;
    this._nodeConfig.internalValue = config.nodeConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorized_network - computed: true, optional: true, required: false
  private _authorizedNetwork?: string; 
  public get authorizedNetwork() {
    return this.getStringAttribute('authorized_network');
  }
  public set authorizedNetwork(value: string) {
    this._authorizedNetwork = value;
  }
  public resetAuthorizedNetwork() {
    this._authorizedNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedNetworkInput() {
    return this._authorizedNetwork;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // discovery_endpoint - computed: true, optional: false, required: false
  public get discoveryEndpoint() {
    return this.getStringAttribute('discovery_endpoint');
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // memcache_full_version - computed: true, optional: false, required: false
  public get memcacheFullVersion() {
    return this.getStringAttribute('memcache_full_version');
  }

  // memcache_nodes - computed: true, optional: false, required: false
  private _memcacheNodes = new MemcacheInstanceMemcacheNodesList(this, "memcache_nodes", false);
  public get memcacheNodes() {
    return this._memcacheNodes;
  }

  // memcache_version - computed: false, optional: true, required: false
  private _memcacheVersion?: string; 
  public get memcacheVersion() {
    return this.getStringAttribute('memcache_version');
  }
  public set memcacheVersion(value: string) {
    this._memcacheVersion = value;
  }
  public resetMemcacheVersion() {
    this._memcacheVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memcacheVersionInput() {
    return this._memcacheVersion;
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

  // node_count - computed: false, optional: false, required: true
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // zones - computed: true, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return cdktf.Fn.tolist(this.getListAttribute('zones'));
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // memcache_parameters - computed: false, optional: true, required: false
  private _memcacheParameters = new MemcacheInstanceMemcacheParametersOutputReference(this, "memcache_parameters");
  public get memcacheParameters() {
    return this._memcacheParameters;
  }
  public putMemcacheParameters(value: MemcacheInstanceMemcacheParameters) {
    this._memcacheParameters.internalValue = value;
  }
  public resetMemcacheParameters() {
    this._memcacheParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memcacheParametersInput() {
    return this._memcacheParameters.internalValue;
  }

  // node_config - computed: false, optional: false, required: true
  private _nodeConfig = new MemcacheInstanceNodeConfigOutputReference(this, "node_config");
  public get nodeConfig() {
    return this._nodeConfig;
  }
  public putNodeConfig(value: MemcacheInstanceNodeConfig) {
    this._nodeConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigInput() {
    return this._nodeConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MemcacheInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MemcacheInstanceTimeouts) {
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
      authorized_network: cdktf.stringToTerraform(this._authorizedNetwork),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      memcache_version: cdktf.stringToTerraform(this._memcacheVersion),
      name: cdktf.stringToTerraform(this._name),
      node_count: cdktf.numberToTerraform(this._nodeCount),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._zones),
      memcache_parameters: memcacheInstanceMemcacheParametersToTerraform(this._memcacheParameters.internalValue),
      node_config: memcacheInstanceNodeConfigToTerraform(this._nodeConfig.internalValue),
      timeouts: memcacheInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorized_network: {
        value: cdktf.stringToHclTerraform(this._authorizedNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      memcache_version: {
        value: cdktf.stringToHclTerraform(this._memcacheVersion),
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
      node_count: {
        value: cdktf.numberToHclTerraform(this._nodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._zones),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      memcache_parameters: {
        value: memcacheInstanceMemcacheParametersToHclTerraform(this._memcacheParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MemcacheInstanceMemcacheParametersList",
      },
      node_config: {
        value: memcacheInstanceNodeConfigToHclTerraform(this._nodeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MemcacheInstanceNodeConfigList",
      },
      timeouts: {
        value: memcacheInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MemcacheInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
